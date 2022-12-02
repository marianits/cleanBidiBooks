import { verify } from 'jsonwebtoken'

export default function profileHandler (req, res) {

  //myTokenName or the name of the used token
  const { myTokenName } = req.cookies;

  if(!myTokenName) {
    return res.status(401).json({error: 'no token'})
  }
  
  try {
    //This one is the secret password with the secret word that was created when creating the token
    const user = verify(myTokenName, 'secret')
    return res.json({ email: user.email, usernam: user.username })
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }

}

//minuto 32