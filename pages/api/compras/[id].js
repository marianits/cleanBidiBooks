import { dbConnect } from 'utils/mongoose';
import Compra from 'models/Compra';

dbConnect();

export default async function handler(req, res) {

  const { method, body, query : { id } } = req

  switch (method) {
    case 'GET':
      try {
        const compra = await Compra.findById(id);
        if (!compra) return res.status(404).json({ msg: 'Compra no encontrada'})
        return res.status(200).json(compra)
      } catch (error) {
        return res.status(400).json({ error: error.message })
      }
    case 'PUT':
      try {
        const compra = await Compra.findByIdAndUpdate(id, body, {
          new: true
        })
        if(!compra) return res.status(404).json({ msg: 'Categoria no encontrada'})
        return res.status(200).json(compra)
      } catch (error) {
        return res.status(400).json({ error: error.message })
      }
    default:
      return res.status(400).json({ msg: 'this method is not supported '})
  }
};
