import { useQuery } from 'react-query';
import Axios from 'axios'
import { Button, Dropdown, Grid, Header, Loader, Table } from 'semantic-ui-react';

export default function Books() {
  const { isLoading, data: books, refetch } = useQuery('books', () => {
    return Axios.get('http://localhost:3000/api/books').then((res) => res.data);
  });

  if (isLoading) {
    return <Loader active inline='centered' />;
  }

  return (
    <>
      <Grid stackable columns={2}>
        <Grid.Column width={10}>
          <Header as='h2'>Libros</Header>
        </Grid.Column>
        <Grid.Column width={6} textAlign='right'>
          <Button color='purple'>Nuevo</Button>
        </Grid.Column>
      </Grid>

      <Table padded color="violet">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Titulo</Table.HeaderCell>
            <Table.HeaderCell>URL</Table.HeaderCell>
            <Table.HeaderCell>Opciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {books.map(book => {
            return (<Table.Row key={book._id}>
              <Table.Cell>{book._id}</Table.Cell>
              <Table.Cell>{book.nombre}</Table.Cell>
              <Table.Cell>{book.URL}</Table.Cell>
              <Table.Cell width={3}>
                <Dropdown icon='ellipsis vertical' className='icon' button floating>
                  <Dropdown.Menu>
                    <Dropdown.Item icon='edit' text='Editar' />
                    <Dropdown.Item icon='trash' text='Eliminar' />
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
