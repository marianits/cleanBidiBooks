import { useMutation } from 'react-query';
import { Button, Grid } from 'semantic-ui-react';
import Axios from 'axios';
import { publish } from '../../../lib/events';

export default function DeleteConfirmation({ refetch, id }) {
  const mutation = useMutation(id => {
    return Axios.delete(`http://localhost:3000/api/categories/${id}`);
  }, {
    onSuccess: async () => {
      refetch();
    }
  });

  const finish = () => {
    publish('finish');
  };

  return (
    <>
      <p>Está segure que quiere eliminar?</p>
      <Grid style={{ justifyContent: 'flex-end' }}>
        <Grid.Column width={3}>
          <Button
            style={{ width: '100%' }}
            onClick={finish}
          >
            Cancelar
          </Button>
        </Grid.Column>
        <Grid.Column width={3}>
          <Button
            color='red'
            style={{ width: '100%' }}
            type='button'
            onClick={() => {
              mutation.mutate(id);
            }}
          >
            Eliminar
          </Button>
        </Grid.Column>
      </Grid>
    </>
  );
}
