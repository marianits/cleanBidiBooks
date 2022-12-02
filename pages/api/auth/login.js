import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

export default function loginHandler (req, res) {

  const { email, password } = req.body;

  //check if email and password are valid
  // if email exists
  //if password is correct

  //use an enviroment variable instead of the secret
  if (email === 'mariana.arnez99@gmail.com' && password === 'admin') {

    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + 60 * 60 *24 * 30,
      email: 'mariana.arnez99@gmail.com',
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
  
  return res.status(401).json({error: 'Invalid email or password'});

};
