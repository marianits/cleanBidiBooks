import { useQuery } from 'react-query';
import Axios from 'axios'
import { Grid, Header, Table } from 'semantic-ui-react';

export default function Categories (){

  const { isLoading, data: categories, refetch } = useQuery('categories', () => {
    return Axios.get('http://localhost:3000/api/categories').then((res) => res.data);
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Header as='h2'>Categorias</Header>
      <Table padded color="violet">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Descripcion</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {categories.map(category => {
            return (<Table.Row key={category._id}>
              <Table.Cell>{category._id}</Table.Cell>
              <Table.Cell>{category.nombre}</Table.Cell>
              <Table.Cell>{category.descripcion}</Table.Cell>
              <Table.Cell>acciones</Table.Cell>
            </Table.Row>)
          })}
        </Table.Body>
      </Table>
    </>
  )
}