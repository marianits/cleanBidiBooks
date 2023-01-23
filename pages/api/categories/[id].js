import { dbConnect } from 'utils/mongoose';
import Category from 'models/Category';

dbConnect();

export default async function handler(req, res) {

  const { method, body, query : { id } } = req

  switch (method) {
    case 'GET':
      try {
        const category = await Category.findById(id);
        if (!category) return res.status(404).json({ msg: 'Categoria no encontrada'})
        return res.status(200).json(category)
      } catch (error) {
        return res.status(400).json({ error: error.message })
      }
    case 'PUT':
      try {
        const category = await Category.findByIdAndUpdate(id, body, {
          new: true
        })
        if(!category) return res.status(404).json({ msg: 'Categoria no encontrada'})
        return res.status(200).json(category)
      } catch (error) {
        return res.status(400).json({ error: error.message })
      }
    case 'DELETE':
      try {
        const category = await Category.findByIdAndDelete(id)
        if(!category) return res.status(404).json({ msg: 'Categoria no encontrada'})
        return res.status(204).json()
      } catch (error) {
        return res.status(400).json({ error: error.message })
      }
    default:
      return res.status(400).json({ msg: 'this method is not supported '})
  }
};
