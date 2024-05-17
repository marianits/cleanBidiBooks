import { Segment } from 'semantic-ui-react';
import { getSession } from 'next-auth/react';
import { useRouter } from "next/router";
import BookRow from 'components/BookRow';
import CentralHeader from 'components/CentralHeader';
import NoBooks from 'components/noBooks';

export default function MiLibreria({ books }) {
  const router = useRouter();

  const goToBook = async (bookId) => {
    await router.push({ pathname: `/books/${bookId}` });
  };

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
                  bookId={book._id}
                  number='1'
                  buttonOne='Continuar Leyendo'
                  buttonOneF={goToBook}
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
