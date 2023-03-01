import { dbConnect } from 'utils/mongoose'
import Book from 'models/Book'

dbConnect();

export default async function handler(req, res) {
  const { id: _id } = req.query;
  const book = await Book.findOne({_id});
  res.status(200).json(book);
};
