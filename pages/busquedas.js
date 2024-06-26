import BookRow from "components/BookRow";
import CentralHeader from 'components/CentralHeader';
import { useRouter } from "next/router";

export default function Busquedas({ books }) {
  const router = useRouter();

  const goBook = async (bookId) => {
    await router.push({ pathname: `/books/show/${bookId}` });
  };
  
  return (
    <>
      <CentralHeader header={`${books.length} títulos encontrados`}/>
      <div className='row' style={{display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px'}}>
        <ul style={{background: 'transparent', border: '0', paddingBottom: '15px', listStyleType: 'none', flex: '0 0 100%', maxWidth: '100%'}}>
          {
            books.map((book, index) => {
              return (
                <BookRow
                  key={book._id}
                  srcImage={book.imageURL}
                  title={book.nombre}
                  number={index+1}
                  description={book.descripcion}
                  author={'Iturgaiz, Ana'}
                  buttonOne='Comprar'
                  buttonOneF={goBook}
                  buttonTwo='Ver mas del libro'
                  precio='75.99'
                  bookId={book._id}
                />
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const { query: { selector }} = ctx;
  const res = await fetch(`http://localhost:3000/api/books/searchBooks?selector=${selector}`);
  const books = await res.json();
  return {
    props: {
      books
    }
  }
};