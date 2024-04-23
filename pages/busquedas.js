export default function Busquedas({ books }) {
  
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