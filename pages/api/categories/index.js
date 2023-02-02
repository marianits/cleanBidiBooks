import { dbConnect } from 'utils/mongoose';
import Category from 'models/Category';

dbConnect();

export default async function handler(req, res) {

  const { method, body } = req

  switch (method) {
    case 'GET':
      try {
        const categories = await Category.find();
        return res.status(200).json(categories)
      } catch (error) {
        return res.status(400).json({ error: error.message })
      }
    case 'POST':
      try {
        const newCategory = new Category(body);
        const savedCategory = await newCategory.save()
        return res.status(201).json(savedCategory);
      } catch (error) {
        return res.status(400).json({ error: error.message })
      }
    default:
      return res.status(400).json({ msg: 'this method is not supported '})
  }
};
