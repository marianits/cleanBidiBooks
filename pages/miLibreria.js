import { Segment } from 'semantic-ui-react';
import BookRow from 'components/BookRow';
import CentralHeader from 'components/CentralHeader';

export default function MiLibreria() {
  return (
    <>
      <Segment basic>
        <CentralHeader header='Mis Libros'/>
        <div className='row' style={{display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px'}}>
          <ul style={{background: 'transparent', border: '0', paddingBottom: '15px', listStyleType: 'none', flex: '0 0 100%', maxWidth: '100%'}}>
            <BookRow
              srcImage='https://static.cegal.es/imagenes/marcadas/9788420/978842047684.gif'
              number='1'
              buttonOne='Continuar Leyendo'
              buttonTwo='Volver a Empezar'
              avance='73%'
            />
          </ul>
        </div>
      </Segment>
    </>
  )
}
