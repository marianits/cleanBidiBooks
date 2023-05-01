import { dbConnect } from '../../../utils/mongoose';
import User from '../../../models/User';

dbConnect();

export default async function loginHandler (req, res) {

  const { email, password } = req.body;

  const existeUsuario = await User.findOne({ email });
  if (!existeUsuario){
    return res.status(401).json({ error: 'The provided user doesn\'t exist' });
  }

  //Future improvement, use bcryptjs to hash passwords.
  if (password === existeUsuario.password) {
    return res.status(200).send(existeUsuario);
  }
  
  return res.status(401).json({error: 'Invalid password'});
};
