import { Button, Header, Segment } from 'semantic-ui-react';
import Image from 'next/image';

export default function MiLibreria() {
  return (
    <>
      <Segment basic>
        <div style={{display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px' }}>
          <div style={{textAlign: 'center', maxWidth: '100%', flexGrow: 1}}>
            <Header
              as='h1'
              style={{marginBottom: '30px', fontFamily: 'Lora,serif', fontWeight: '400'}}
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
              <div className='book-content' style={{flex: '0 0 75%', maxWidth: '75%'}}>
                <div style={{display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px'}} className='row'>
                  <div className='bookImage' style={{width: '15%', paddingRight: '15px', position: 'relative', fontFamily: 'Open Sans,sans-serif', fontWeight: '400px'}}>
                    {/* Cambiar imagen aqui para demo */}
                    <Image src='https://static.cegal.es/imagenes/marcadas/9788420/978842047684.gif' alt='animalSalvaje' width={136} height={217} />
                    <span
                      style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '-7px',
                        content: '""',
                        width: '45px',
                        height: '45px',
                        backgroundColor: '#131313',
                        border: '4px solid #FFF',
                        color: '#fff',
                        fontFamily: 'Lora,serif',
                        fontSize: '16px',
                        boxShadow: '0 1px 25px #0000001a',
                        borderRadius: '50%',
                        textAlign: 'center',
                        paddingTop: '5px'
                      }}
                    >
                      1
                    </span>
                  </div>
                  <div className='bookDetails' style={{width: '85%', paddingLeft: '15px', paddingRight: '32px'}}>
                  <Header as='h2' className='title' style={{fontSize: '22px', fontWeight: '400', lineHeight: '1.2', color: '#ee6314'}}>Un animal Salvaje</Header>
                  <Header as='h3' className='author' style={{fontWeight: '400', fontSize: '13px'}}>Zambrana, Carlos</Header>
                  <p className='description' style={{fontSize: '14px', lineHeight: '24px', lineHeight: '150%', fontWeight: '400'}}>
                    VEINTIDÓS MILLONES DE LECTORES LO ESTÁN ESPERANDO. Vuelve la «voz napoleónica, que no escribe, boxea» (El Cultural), Premio Goncourt des Lycéens, Gran Premio de Novela de la Academia Francesa, Premio Lire, Premio Qué Leer, Premio San Clemente y Premio Internacional Alicante Noir.N.º 1 en la lista d...
                  </p>
                  </div>
                </div>
                
              </div>
              <div className='book-action' style={{background: '#F4F4F4', borderRadius: '8px', padding: '.5rem 1.5rem 1.5rem'}}>
                <div style={{marginTop: '7.5px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
                  <div className='bookProgress' style={{color: '#3c4858'}}>
                    <strong>0%</strong> de avance
                  </div>
                  <Button className='continueReadingBtn' style={{background: '#EE6314', color: '#fff'}}>
                    Continuar leyendo
                  </Button>
                  <Button className='startAgainBtn' style={{border: '1px solid #EE6314', color: '#ee6314', background: 'F4F4F4', marginTop: '7.5px'}}>
                    Volver a empezar
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Segment>
    </>
  )
}
