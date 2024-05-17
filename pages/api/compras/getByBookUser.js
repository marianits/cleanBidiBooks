import { dbConnect } from 'utils/mongoose';
import Compra from 'models/Compra';

dbConnect();

export default async function handler(req, res) {
  const { userId = '', bookId = '' } = req.body;
  try {
    const compra = await Compra.findOne({ usuarioId: userId, libroId: bookId  });
    res.status(200).json(compra);
  } catch (error) {
    return error
  }
};
