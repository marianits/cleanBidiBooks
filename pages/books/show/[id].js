import { 
  Button,
  Grid,
  Header,
  Label
} from 'semantic-ui-react';

export default function BookInformation ( { book }){
  return(
    <Grid stackable columns={2}>
      <Grid.Column width={4}>
        <div
          style={{
            borderRadius: '0 6% 6% 0/4%',
            backgroundImage: `url(${book.imageURL})`,
            width: '250px',
            height: '400px',
            backgroundSize: 'cover',
          }}
        />
        <div className='bookActions' style={{margin: '1.6rem auto 2.4rem auto', display:'flex', flexDirection:'column'}}>
          <Button style={{borderRadius: '3rem', width:'250px'}}>Comprar libro!</Button>
        </div>
      </Grid.Column>
      <Grid.Column width={11}>
        <div className='bookTitleSection'>
          <Header 
            as='h1'
            style={{ fontFamily: 'Copernicus,"Libre Baskerville",Georgia,serif', fontSize: '3.2rem' }}
          >
            {book.nombre}
          </Header>
        </div>
        <div className='bookMetaDataSection'>
          <Header
            as='h3'
            style={{ 
              fontFamily: 'Copernicus,"Libre Baskerville",Georgia,serif',
              fontWeight: '400',
              margin: '1.2rem 0'
            }}
          >
            {book.bookAuthor}
          </Header>
          <div className='bookDetails'>
            <span 
              style={{font: '400 1.2rem/1.4375 "Proxima Nova",Montserrat,Arial,sans-serif'}}
            >
              {book.descripcion}
            </span>
          </div>
          <Label.Group>
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
  const { query: { id } } = ctx;
  const res = await fetch(`http://localhost:3000/api/books/${id}`);
  const book = await res.json();
  console.log(book);
  return {
    props: {
      book
    }
  }
};