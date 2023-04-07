import { useState } from 'react';
import CoverUpload from 'components/CoverUpload';
import { 
  Button,
  Divider,
  Dropdown,
  Grid,
  Header,
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
  },{
    key: 'Laia Aguilar',
    text: 'Laia Aguilar',
    value: 'Laia Aguilar',
  }
]

export default function NewBook() {

  const [file, setFile] = useState();
  const [nombre, setNombre] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [image, setImage] = useState('')

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    console.log(file);
    if (name === 'file') {
      setFile(file);
    } else {
      setImageFile(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  };

  const upload = async () => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('imageFile', imageFile);
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
    <Grid stackable columns={2} style={{alignItems: 'center', paddingTop: '100px'}}>
      <Grid.Column width={4}>
        <div style={{
          height: '304px',
          width: '195px',
          backgroundColor:'#eee',
          border:'1px solid #eee',
          margin:'0 auto',
          position: 'relative'}}
        >
          {image ? (
            <div
              style={{
                backgroundImage: `url(${image})`,
                width: '100%',
                height: '300px',
                backgroundSize: 'cover',
              }}
            />
          ): (
            <CoverUpload handleFileChange={handleFileChange}/>
          )}    
        </div>
      </Grid.Column>
      <Grid.Column width={11} style={{marginLeft: '4rem'}}>
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
            Subir
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
