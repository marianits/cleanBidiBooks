import { Grid, Header, Image } from 'semantic-ui-react';
import Link from 'next/link';

export default function BookGrid({ genre = 'Género', books }){
  return(
    <>
      <Header as='h3'>{genre}</Header>
      <Grid columns={5} divided>
        {books?.map(book => {
          return(
            <Link key={book._id} href={`/books/show/${book._id}`}>
              <Image
              alt='imagen'
              width={200}
              height={345}
              src={book.imageURL}
              style={{ cursor: 'pointer' }}
              />
            </Link>
          )
        })}
      </Grid>
    </>
  )
}
