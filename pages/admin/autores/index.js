import { useQuery } from 'react-query';
import Axios from 'axios'
import { Button, Dropdown, Grid, Header, Table } from 'semantic-ui-react';
import { ModalForm } from '../../../components/Modal';
import NewAuthor from './authorForm'
import ConfirmDelete from '../generos/confirmDelete';

export default function Authors() {

  const { isLoading, data: authors, refetch } = useQuery('authors', () => {
    return Axios.get('http://localhost:3000/api/authors').then((res) => res.data);
  });
    
  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Grid stackable columns={2}>
        <Grid.Column width={10}>
          <Header as='h2'>Autores</Header>
        </Grid.Column>
        <Grid.Column width={6} textAlign='right'>
          <ModalForm header={'Nuevo Autor'} trigger={ <Button color='violet'>Nuevo</Button> }>
            <NewAuthor refetch={refetch} />
          </ModalForm>
        </Grid.Column>
      </Grid>
      <Table padded color="violet">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Apellidos</Table.HeaderCell>
            <Table.HeaderCell>Opciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {authors.map(author => {
            return (<Table.Row key={author._id}>
              <Table.Cell>{author._id}</Table.Cell>
              <Table.Cell>{author.nombre}</Table.Cell>
              <Table.Cell>{author.apellidos}</Table.Cell>
              <Table.Cell width={3}>
                <Dropdown icon='ellipsis vertical' className='icon' button floating>
                  <Dropdown.Menu>
                    <ModalForm
                      header='Editar Autor'
                      trigger={ <Dropdown.Item icon='edit' text='Editar' /> }
                    >
                      <NewAuthor author={author} mode='update' refetch={refetch} id={author._id} />
                    </ModalForm>
                    <ModalForm
                      header='Confirmación'
                      trigger={ <Dropdown.Item icon='trash' text='Eliminar' /> }
                    >
                      <ConfirmDelete id={author._id} refetch={refetch} />
                    </ModalForm>
                  </Dropdown.Menu>
                </Dropdown>
              </Table.Cell>

            </Table.Row>)
          })}
        </Table.Body>
      </Table>
    </>
  )
}