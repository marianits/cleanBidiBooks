import { Segment } from 'semantic-ui-react';
import { getSession } from 'next-auth/react';
import BookRow from 'components/BookRow';
import CentralHeader from 'components/CentralHeader';
import NoBooks from 'components/noBooks';

export default function MiLibreria({ books }) {
  return (
    <>
      {books.length > 0 ? (
      <Segment basic>
      <CentralHeader header='Mis Libros'/>
      <div className='row' style={{display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px'}}>
        {books.map(book => {
          return(
            <>
              <ul style={{background: 'transparent', border: '0', paddingBottom: '15px', listStyleType: 'none', flex: '0 0 100%', maxWidth: '100%'}}>
                <BookRow
                  srcImage={book.imageURL}
                  title={book.nombre}
                  description={book.descripcion}
                  number='1'
                  buttonOne='Continuar Leyendo'
                  buttonTwo='Volver a Empezar'
                  avance='73%'
                />
              </ul>
            </>
          )
        })}
      </div>
    </Segment>) : (
      <NoBooks />)}
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const userId = session?.user?.userId;
  const res = await fetch('http://localhost:3000/api/compras/getByUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userId": userId
    })
  });
  const books = await res.json();
  return {
    props: {
      books
    }
  }
};
