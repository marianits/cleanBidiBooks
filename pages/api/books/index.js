import { dbConnect } from 'utils/mongoose'
import Book from 'models/Book'
import formidable from "formidable"
import fs from "fs";
import uploadHandler from 'utils/backblaze';

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
        
        // Do something with formData.fields and formData.files
        
        const url = await uploadImage(formData.files.file, formData.fields.nombre);
        const newBook = new Book({
          nombre: formData.fields.nombre,
          URL: url
        });
        await newBook.save();

        res.status(201).json();
      } catch (error) {
        return res.status(500).json(error)
      }

    default:
      return res.status(400).json({ msg: 'This method is not supported'})
  }
}