import { dbConnect } from 'utils/mongoose';
import Author from 'models/Author';

dbConnect();

export default async function handler(req, res) {

  const { method, body, query : { id } } = req

  switch (method) {
    case 'GET':
      try {
        const author = await Author.findById(id);
        if (!author) return res.status(404).json({ msg: 'Autor no encontrado'})
        return res.status(200).json(author)
      } catch (error) {
        return res.status(400).json({ error: error.message })
      }
    case 'PUT':
      try {
        const author = await Author.findByIdAndUpdate(id, body, {
          new: true
        })
        if(!author) return res.status(404).json({ msg: 'Autor no encontrado'})
        return res.status(200).json(author)
      } catch (error) {
        return res.status(400).json({ error: error.message })
      }
    case 'DELETE':
      try {
        const author = await Author.findByIdAndDelete(id)
        if(!author) return res.status(404).json({ msg: 'Autor no encontrado'})
        return res.status(204).json()
      } catch (error) {
        return res.status(400).json({ error: error.message })
      }
    default:
      return res.status(400).json({ msg: 'this method is not supported '})
  }
};
