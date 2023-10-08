import { dbConnect } from 'utils/mongoose';
import Compra from 'models/Compra';
import User from 'models/User';
import Book from 'models/Book';

dbConnect();

export default async function handler(req, res) {

  const { method, body } = req;

  switch (method) {

    case 'GET':
      const compras = await Compra.find();
      res.status(200).json(compras);
    case 'POST':
      try {
        const { usuarioId, libroId } = body

        const libro = await Book.findById(libroId);
        const usuario = await User.findById(usuarioId);
        
        if(!libro || !usuario){
          return res.status(500).json({ msg: 'El libro o el usuario no existen'})
        }

        const newCompra = new Compra(body);
        const savedCompra = await newCompra.save()
        return res.status(201).json(savedCompra);

      } catch (error) {
        return res.status(500).json(error)
      }

    default:
      return res.status(400).json({ msg: 'This method is not supported'})
  }
}