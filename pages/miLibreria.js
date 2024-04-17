import { Button, Header, Segment } from 'semantic-ui-react';

export default function MiLibreria() {
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
          </div>
          <div>
          </div>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px'}}>
          <ul style={{background: 'transparent', border: '0', paddingBottom: '15px', listStyleType: 'none', flex: '0 0 100%', maxWidth: '100%'}}>
            <li style={{marginBottom: '30px', paddingBottom: '30px', display: 'flex', flexWrap: 'wrap', marginRight: '-15px',marginLeft: '-15px'}}>
              <div style={{flex: '0 0 75%', maxWidth: '75%'}}>
                <div style={{display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px'}}>

                </div>
              </div>
            </li>
          </ul>
        </div>
      </Segment>
    </>
  )
}
