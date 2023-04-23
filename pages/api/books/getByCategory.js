import { dbConnect } from 'utils/mongoose';
import Book from 'models/Book';
import Category from 'models/Category';

dbConnect();

export default async function handler(req, res) {
  const categorias = await Category.find();
  let categorizedBooks = {}
  for (const category of categorias){
    const categoria = category.nombre
    const books = await Book.find({ categorias: {  $in: [categoria] } });
    categorizedBooks[categoria] = books;
  }
  res.status(200).json(categorizedBooks);
};
