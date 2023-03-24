import { useState } from 'react';
import { 
  Button,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Form,
  TextArea 
} from 'semantic-ui-react';

const categorias = [
  {
    key: 'Terror',
    text: 'Terror',
    value: 'Terror',
  }, {
    key: 'Acción',
    text: 'Acción',
    value: 'Acción',
  }, {
    key: 'Fantasía',
    text: 'Fantasía',
    value: 'Fantasía',
  }, {
    key: 'Ciencia Ficción',
    text: 'Ciencia Ficción',
    value: 'Ciencia Ficción',
  }
]

const autores = [
  {
    key: 'Isabel Allende',
    text: 'Isabel Allende',
    value: 'Isabel Allende',
  }, {
    key: 'Haruki Murakami',
    text: 'Haruki Murakami',
    value: 'Haruki Murakami',
  }
]

export default function NewBook() {

  const [file, setFile] = useState();
  const [nombre, setNombre] = useState('');
  const [imageURL, setImageURL] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    } else {
      setFile(null);
    }
  };

  const upload = async () => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('nombre', nombre);

    try {
      await fetch('http://localhost:3000/api/books', {
        method: 'POST',
        body: formData
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid stackable columns={2}>
      <Grid.Column width={4} style={{backgroundColor: 'coral'}}>
        <div style={{
          height: '304px',
          width: '195px',
          backgroundColor:'#eee',
          border:'1px solid #eee',
          margin:'0 auto',
          position: 'relative'}}
        >
          <div className='new-cover-upload' style={{
            margin: 'auto',
            width:'50%',
            height:'86px',
            margin:'auto',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            textAlign: 'center'
          }}>
            <Icon size='huge' name='image' style={{color: 'grey', cursor: 'pointer'}}>
            </Icon>
            <span style={{color: '#6f6f6f', cursor: 'pointer'}}>Agregar portada</span>
          </div>
        </div>
      </Grid.Column>
      <Grid.Column width={11} style={{backgroundColor: 'pink', marginLeft: '3rem'}}>
        <Header
          as='h2'
          content='Detalles del libro'
        />
        <Divider />
        <Form size='large' style={{padding: '0 20px'}}>

          <Form.Field>
            <label>Nombre del libro</label>
            <input
              placeholder='Historia sin nombre'
              id='nombre'
              name="nombre"
              onChange={(e) => setNombre(e.target.value)} 
            />
          </Form.Field>

          <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Descripción'
            placeholder='Descripción'
          />

          <Form.Group inline>
            <label>Categorias</label>
            <Dropdown placeholder='categorías' fluid multiple selection options={categorias} />
          </Form.Group>

          <Form.Group inline>
            <label>Autor</label>
            <Dropdown
              placeholder='Seleccione un autor'
              fluid
              selection
              options={autores}
            />
          </Form.Group>

          <Divider />
          
          <Form.Group inline>
            <label>Archivo</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
            />
          </Form.Group>

          <Divider />

          <Button
            type='submit'
            color='purple'
            size='large'
            onClick={upload}
          >
            Submit
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
