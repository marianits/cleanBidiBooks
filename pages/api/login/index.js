import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
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
    console.log('holis');
    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + 60 * 60 *24 * 30,
      email,
      username: 'marianits'
    }, 'secret')

    const serialized = serialize('myTokenName', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: '/'
    }) 

    res.setHeader('Set-cookie', serialized);
    return res.json('login route');
  }
  
  return res.status(401).json({error: 'Invalid password'});

};
