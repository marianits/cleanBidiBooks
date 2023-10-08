import { dbConnect } from 'utils/mongoose';
import User from 'models/User';

dbConnect();

export default async function handler(req, res) {
  const { selector } = req.body;
  try {
    const usuario = await User.findOne({ email: selector });
    res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
};