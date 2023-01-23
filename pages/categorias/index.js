import { useQuery } from 'react-query';
import Axios from 'axios'
import { Button, Dropdown, Grid, Header, Table } from 'semantic-ui-react';
import { ModalForm } from '../../components/Modal';
import NewCategory from './categoryForm'
import ConfirmDelete from './confirmDelete';

export default function Categories (){

  const { isLoading, data: categories, refetch } = useQuery('categories', () => {
    return Axios.get('http://localhost:3000/api/categories').then((res) => res.data);
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Grid stackable columns={2}>
        <Grid.Column width={10}>
          <Header as='h2'>Categorias</Header>
        </Grid.Column>
        <Grid.Column width={6} textAlign='right'>
          <ModalForm header={'Nueva Categoría'} trigger={ <Button color='violet'>Nueva</Button> }>
            <NewCategory refetch={refetch} />
          </ModalForm>
        </Grid.Column>
      </Grid>
      <Table padded color="violet">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Descripcion</Table.HeaderCell>
            <Table.HeaderCell>Opciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {categories.map(category => {
            return (<Table.Row key={category._id}>
              <Table.Cell>{category._id}</Table.Cell>
              <Table.Cell>{category.nombre}</Table.Cell>
              <Table.Cell>{category.descripcion}</Table.Cell>
              <Table.Cell width={3}>
                <Dropdown icon='ellipsis vertical' className='icon' button floating>
                  <Dropdown.Menu>
                    <ModalForm
                      header='Editar Categoría'
                      trigger={ <Dropdown.Item icon='edit' text='Editar' /> }
                    >
                      <NewCategory category={category} mode='update' refetch={refetch} id={category._id} />
                    </ModalForm>
                    <ModalForm
                      header='Confirmation'
                      trigger={ <Dropdown.Item icon='trash' text='Eliminar' /> }
                    >
                      <ConfirmDelete id={category._id} refetch={refetch} />
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