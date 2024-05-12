import { dbConnect } from 'utils/mongoose';
import Book from 'models/Book';
import Compra from 'models/Compra';

dbConnect();

export default async function handler(req, res) {
  const { userId = '' } = req.query;
  try {
    const compras = await Compra.find({ userioId: userId });
    const librosIds = compras.map(compra => compra.libroId);
    const books = await Book.find({ _id: { $in: librosIds } })
    res.status(200).json(books);
  } catch (error) {
    return error
  }
};
