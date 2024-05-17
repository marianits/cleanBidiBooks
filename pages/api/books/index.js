import { dbConnect } from 'utils/mongoose'
import Book from 'models/Book'
import formidable from "formidable"
import fs from "fs";
import uploadHandler from 'utils/backblaze';
import Stripe from 'stripe';

dbConnect()

export const config = {
  api: {
    bodyParser: false
  }
}

const uploadImage = async (file, title) => {
  const fileData = fs.readFileSync(file.path);
  const fileExt = file.name.substring(file.name.lastIndexOf('.') + 1);
  const fileName = `${title}.${fileExt}`
  const { url } = await uploadHandler(fileData, file.type, fileName);
  return url;
}

export default async function handler(req, res) {

  const { method } = req;

  switch (method) {

    case 'GET':
      const books = await Book.find();
      res.status(200).json(books);
      break;
    case 'POST':
      const form = new formidable.IncomingForm();
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

      try {
        
        const formData = await new Promise((resolve, reject) => {
          form.parse(req, (err, fields, files) => {
            if (err) {
              reject(err);
            } else {
              resolve({ fields, files });
            }
          });
        });
        
        const fileURL = await uploadImage(formData.files.file, formData.fields.nombre.replace(/\s/g, ""));
        const imageURL = formData.files.imageFile ? 
          await uploadImage(formData.files.imageFile, `${formData.fields.nombre.replace(/\s/g, "")}-image`)
          : "" ;

        // Upload product to Stripe
        const { default_price } = await stripe.products.create({
          name: formData.fields.nombre,
          description: formData.fields.descripcion,
          'images[]': imageURL,
          default_price_data: {
            currency: 'bob',
            "unit_amount": 7599,
          }
        });

        const newBook = new Book({
          categorias: formData.fields.categorias || '',
          autores: JSON.parse(formData.fields.autores) || '',
          nombre: formData.fields.nombre || '',
          descripcion: formData.fields.descripcion || '',
          fileURL,
          imageURL,
          stripeId: default_price
        });

        await newBook.save();
        res.status(201).json();

      } catch (error) {
        console.log(error);
        return res.status(500).json(error)
      }
      break;
    default:
      return res.status(400).json({ msg: 'This method is not supported'})
  }
}
