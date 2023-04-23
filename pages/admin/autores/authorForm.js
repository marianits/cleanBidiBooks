import { useState } from 'react';
import { useMutation } from 'react-query';
import Axios from 'axios'
import { Button, Form, Grid, Icon, Input } from 'semantic-ui-react';
import { publish } from '../../../lib/events';

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
    apellidos: author?.apellidos || '',
    biografia: author?.biografia || '',
    redesSociales: {
      facebook: author?.redesSociales?.facebook || 'ccc',
      twitter: author?.redesSociales?.twitter || 'ccc',
      instagram: author?.redesSociales?.instagram || ''
    }
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

        <Form.Field required>
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

        <Form.Field required>
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

        <Form.TextArea 
          label='Acerca de'
          name="biografia"
          defaultValue={author?.biografia}
          onChange={handleChange}
        />

        <Form.Field inline style={{paddingLeft: '50px'}}>
          <label>Redes Sociales</label>
          <Input
            icon='facebook' 
            iconPosition='left' 
            placeholder='enlace...' 
            name="redesSociales.facebook"
            defaultValue={author?.redesSociales?.facebook}
            onChange={handleChange} 
          />
          <Input
            icon='twitter'
            iconPosition='left'
            placeholder='enlace...'
            name="redesSociales.twitter"
            defaultValue={author?.redesSociales?.twitter}
            onChange={handleChange} 
          />
          <Input
            icon='instagram'
            iconPosition='left'
            placeholder='enlace...'
            name="redesSociales.instagram"
            defaultValue={author?.redesSociales?.instagram}
            onChange={handleChange} 
          />
        </Form.Field>

        <Form.Field inline style={{paddingLeft: '200px'}}>
          <label>Foto de Perfil</label>
          <Icon disabled name='user outline' size='large'/>
          <input
            type="file"
            id="file"
            name="file"
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
