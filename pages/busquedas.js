import BookRow from "components/BookRow";
import CentralHeader from 'components/CentralHeader';

export default function Busquedas({ books }) {
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
                  number={index+1}
                  buttonOne='Comprar'
                  buttonTwo='Ver mas del libro'
                  precio='99'
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
  console.log(books);
  return {
    props: {
      books
    }
  }
};