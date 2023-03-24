import { useState } from 'react';
import { useMutation } from 'react-query';
import Axios from 'axios'
import { Button, Form, Grid } from 'semantic-ui-react';
import { publish } from '../../../lib/events';

export default function CatogoryForm({ refetch, category, mode, id }) {

  const mutation = useMutation(newCategory => {
    if(mode !== 'update'){
      return Axios.post('http://localhost:3000/api/categories', newCategory)
    }else {
      return Axios.put(`http://localhost:3000/api/categories/${id}`, newCategory)
    }
  }, {
  onSuccess: async () => {
    refetch()
  }})


  const [newCategory, setNewCategory] = useState({
    nombre: category?.nombre || null,
    descripcion: category?.descripcion|| ''
  });

  const handleChange = (e) => setNewCategory({ ...newCategory, [e.target.name]: e.target.value });

  const handleUpload = async (e) => {
    e.preventDefault();
    await createCategory();
  };

  const createCategory = async () => {
    try {
      await mutation.mutate(newCategory)
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
            defaultValue={category?.nombre}
            onChange={handleChange}
          />
        </Form.Field>

        <Form.TextArea
          label='Descripción:'
          placeholder="Descripcion..."
          name="descripcion"
          defaultValue={category?.descripcion}
          onChange={handleChange}
        />

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
