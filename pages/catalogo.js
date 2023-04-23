import { Container } from 'semantic-ui-react';
import BookGrid from 'components/BookGrid';
import { useRouter } from 'next/router'

export default function Catalog({ books }) {
  const genres = Object.keys(books);
  return(
    <Container style={{ minHeight: '100vh' }} >
      {
        genres.map(genre => {
          return(
            <BookGrid key={genre} genre={genre} books={books[genre]} />
          )
        })
      }
    </Container>
  )
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/books/getByCategory');
  const books = await res.json()
  return {
    props: {
      books
    }
  }
};
