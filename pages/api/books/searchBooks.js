import { dbConnect } from 'utils/mongoose';
import Book from 'models/Book';

dbConnect();

export default async function handler(req, res) {
  const { selector = '' } = req.query;
  const testSelector = { nombre: { $regex: new RegExp(selector), $options: 'i' } };
  const books = await Book.find(testSelector);
  res.status(200).json(books);
};
