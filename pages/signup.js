import { useState } from 'react';
import { 
  Button,
  Card,
  Checkbox,
  Grid,
  Form,
  Message
} from 'semantic-ui-react';
import Image from 'next/image'

export default function SignUp() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfimPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [error, setError] = useState(false);

  const upload = async () => {
    const user = {
      username,
      email,
      password
    }
    try {
      await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });
    } catch (err) {
      console.log(err);
      setError(err.message)
      console.log(err.message);
    }
  };

  return(
  <Grid stackable columns={2} style={{alignItems: 'center', paddingTop: '100px'}}>
    <Grid.Column>
      <Image
        src="https://static.wattpad.com/img/landing/hero-devices.png?v=6ef5591"
        alt="Landing image"
        width={1000}
        height={600}
        style={{ maxWidth: '100%', maxHeight: '540px' }}
      />
    </Grid.Column>
    <Grid.Column>
      <Card fluid style={{margin: '0 40px'}}>

          <h1 className='title' 
            style={{lineHeight: '40px',
              fontWeight: 700,
              fontSize: '22px',
              textAlign: 'center',
              paddingTop: '10px',
              fontFamily: 'inRounded,"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif'
              }} 
            >Unirse a BidiLibros
          </h1>
          <p className='subtitle' style={{textAlign: 'center', padding: '0 40px'}}>
            Se parte de la comunidad de lectores, todos conectados por el poder de una historia
          </p>

        <Form size='large' style={{padding: '0 20px'}}>

          <Form.Input
            placeholder='Ingrese un nombre de usuario'
            id='username'
            label='Username'
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Form.Field>
            <label>E-mail</label>
            <input
              placeholder='Ingrese su email'
              id='email'
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input
              type='password'
              placeholder='Ingrese su password'
              id='password'
              name="password"
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Form.Field>

          <Form.Field>
            <label>Confirmar password</label>
            <input
              type='password'
              placeholder='Confirme el password'
              id='confirmPassword'
              name="confirmPassword"
              onChange={(e) => setConfimPassword(e.target.value)} 
            />
          </Form.Field>

          <Checkbox
            label='Acepto los términos y condiciones'
            style={{ display: 'block'}}
          />

          <Button
            type='submit'
            color='orange'
            size='large'
            style={{ margin: '20px 0'}}
            onClick={upload}
          >
            Registrarse
          </Button>
          
          {error && 
            <Message
              error
              header='Errores:'
              content={error}
            />
          }

        </Form>
      </Card>
    </Grid.Column>
  </Grid>
  )
}
