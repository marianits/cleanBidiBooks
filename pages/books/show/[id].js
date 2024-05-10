import { 
  Button,
  Grid,
  Header,
  Label
} from 'semantic-ui-react';
import { checkout } from 'lib/checkout';
import { getSession } from 'next-auth/react'
import InfoImage from 'components/InfoImage';
import InfoHeader from 'components/InfoHeader';
import Link from 'next/link';

export default function BookInformation ({ book, userId }) {
  const handlePayment = event => {
    event.preventDefault()
    checkout(book, userId)
  };

  return(
    <Grid stackable columns={2}>
      <Grid.Column width={4}>
        <InfoImage imageURL={book.imageURL}/>
        <div className='bookActions' style={{margin: '1.6rem auto 2.4rem auto', display:'flex', flexDirection:'column'}}>
          <Button
            color='orange'
            style={{borderRadius: '3rem', width:'250px'}}
            onClick={handlePayment}
          >
            Comprar libro!
          </Button>
        </div>
      </Grid.Column>
      <Grid.Column width={11}>
        <InfoHeader header={book.nombre} />
        <div className='bookMetaDataSection'>
          {book.autores.map(autor => {
            return(
              <Link key={autor._id} href={`/authors/${autor.id}`}>
                <Header
                  as='h3'
                  style={{ 
                    fontFamily: 'Copernicus,"Libre Baskerville",Georgia,serif',
                    fontWeight: '400',
                    margin: '1.2rem 0'
                  }}
                >
                  {autor.name}
                </Header>
              </Link>
            )})}
        
          <div className='bookDetails'>
            <span 
              style={{font: '400 1.2rem/1.4375 "Proxima Nova",Montserrat,Arial,sans-serif', marginTop: '10px'}}
            >
              {book.descripcion}
            </span>
          </div>
          <Label.Group style={{marginTop: '10px'}}>
            {book.categorias.map(c => {
              return(
                <Label key={c}>
                  {c}
                </Label>
              )
            })}
          </Label.Group>
        </div>
      </Grid.Column>
    </Grid>
  )
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const { query: { id } } = ctx;
  const res = await fetch(`http://localhost:3000/api/books/${id}`);
  const book = await res.json();
  return {
    props: {
      book,
      userId: session?.user?.userId || '123'
    }
  }
};