import { useState } from 'react';
import { useMutation } from 'react-query';
import Axios from 'axios'
import { Button, Form, Grid } from 'semantic-ui-react';
import { publish } from '../../lib/events';

export default function AuthorForm({ refetch, author, mode, id }) {

  const mutation = useMutation(newAuthor => {
    if(mode !== 'update'){
      return Axios.post('http://localhost:3000/api/authors', newAuthor)
    } else {
      return Axios.put(`http://localhost:3000/api/authors/${id}`, newAuthor)
    }
  }, {
  onSuccess: async () => {
    refetch()
  }})


  const [newAuthor, setNewAuthor] = useState({
    nombre: author?.nombre || null,
    apellidos: author?.apellidos || ''
  });

  const handleChange = (e) => setNewAuthor({ ...newAuthor, [e.target.name]: e.target.value });

  const handleUpload = async (e) => {
    e.preventDefault();
    await createAuthor();
  };

  const createAuthor = async () => {
    try {
      await mutation.mutate(newAuthor)
      publish('finish');
    } catch (error) { }
  };

  const finish = () => {
    publish('finish');
  };

  return (
    <>
      <Form>

        <Form.Field>
          <label htmlFor="cname" >Nombre: </label>
          <input
            type="text"
            id="cname"
            name="nombre"
            placeholder="Ingrese el nombre..."
            defaultValue={author?.nombre}
            onChange={handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="cname" >Apellidos: </label>
          <input
            type="text"
            id="cname"
            name="apellidos"
            placeholder="Ingrese los apellidos..."
            defaultValue={author?.apellidos}
            onChange={handleChange}
          />
        </Form.Field>

        <Grid style={{ justifyContent: 'flex-end' }}>
          <Grid.Column width={3}>
            <Button
              color='violet'
              style={{ width: '100%' }}
              onClick={handleUpload}
            >
              Confirmar
            </Button>
          </Grid.Column>
          <Grid.Column width={3}>
            <Button
              color='black'
              style={{ width: '100%' }}
              type='button'
              onClick={finish}
            >
              Cancelar
            </Button>
          </Grid.Column>
        </Grid>

      </Form>
    </>
  );
}
