import { Button, Header, Segment } from 'semantic-ui-react';

export default function NoBooks() {
  return (
    <>
      <Segment textAlign='center' basic>
        <div style={{display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px' }}>
          <div style={{textAlign: 'center', maxWidth: '100%', flexGrow: 1}}>
            <Header
              as='h1'
              style={{marginBottom: '30px'}}
            >
              Mis libros
            </Header>
            <Header
              as='h2'
            >
              0 LIBROS
            </Header>
            <Button content='+ Agregar libro a mi libreria' secondary />
          </div>
          <div>
          </div>
        </div>
      </Segment>
    </>
  )
}