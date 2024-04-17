import { Container, Grid, Header, Segment } from 'semantic-ui-react';
import BookGrid from 'components/BookGrid';
import GiftItem from 'components/GiftItem';
import Image from 'next/image';

export default function Catalog({ books }) {
  const genres = Object.keys(books);
  return(
    <>
      <Segment basic>
        <div style={{justifyContent: 'space-between', alignItems: 'center', maxWidth: '1140px', paddingLeft: '20px', paddingRight: '20px', display: 'flex'}}>
          <div style={{flex: '0 auto', order: '-1', alignSelf: 'center', position: 'relative'}}>
            <Image src='https://assets-global.website-files.com/6066efceac899333ef24572a/60b52a8566ed2786159019c4_bookish_home_equipo_bookish.webp' alt='librosDes' width={450} height={450} />
            <Image  style={{zIndex: '1', position: 'absolute', top: '-6%', right: '-8%'}} src='https://assets-global.website-files.com/6066efceac899333ef24572a/62823cba22c153199aff46eb_coma.svg' alt='comaM1' width={80} height={116} />
          </div>
          <div style={{flexDirection: 'column', flex: '0 auto', order: '0', alignSelf: 'center', alignItems: 'flex-end', width: '500px', marginLeft: '60px'}}>
            <Header 
              as='h3'
              style={{ color: '#222', marginBottom: '20px', fontSize: '32px', fontWeight: '700', lineHeight: '1.1'}}
            >
              El camino hacia los buenos libros
            </Header>
            <p style={{ color: '#222', marginBottom: '10px', fontSize: '18px', fontWeight: '400', lineHeight: '1.3'}}>
              Ser lectores nos enseña una manera privilegiada de estar en el mundo, una en que el refugio, el calor y la compañía están garantizados y siempre disponibles en forma de libro. Es una pasión que te cambia la vida, aunque cultivarla no siempre es sencillo. Con las decenas de miles de títulos que se publican y tanto ruido ahí fuera, no es fácil dar con los libros adecuados. Los que obran el milagro del cambio, los que recordaremos siempre. Los buenos de verdad.
              Teníamos un plan: vivir siempre en contacto con esa clase de libros y con las personas que los aman. Fuera como fuera. El plan se convirtió en vocación y la vocación nos ha llevado a crear una familia extraordinaria. Hemos convertido la suerte de encontrar el libro perfecto en una costumbre, en un acontecimiento mensual que compartimos con miles de lectores. Porque el camino hacia los buenos libros debería ser libre y sin obstáculos.
            </p>
        </div>
        </div>
      </Segment>
      <Container style={{ minHeight: '100vh' }} >
        {
          genres.map(genre => {
            return(
              <BookGrid key={genre} genre={genre} books={books[genre]} />
            )
          })
        }
      </Container>
      <Segment textAlign='center' basic>
        <Header as='h1'>La &nbsp;
          <span style={{ 
            backgroundImage: 'url(https://assets-global.website-files.com/6066efceac899333ef24572a/60828fc8a6a4e98117c1d3d5_underline2.svg)',
            backgroundPosition: '50% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto'
          }}
          >
            experiencia 
          </span> 
          &nbsp;de BidiBooks
        </Header>
        <Grid centered columns={3}>
          <GiftItem 
            url='https://assets-global.website-files.com/6066efceac899333ef24572a/60b11685859dcf247b2e38f0_1_colecciones.gif'
            header='Descubre!'
            description='Mas de 150 libros y 50 autores'
            idescription='3 libros'
          />
          <GiftItem 
            url='https://assets-global.website-files.com/6066efceac899333ef24572a/60b116856d8ef83ee273ed88_2A_un_libro_al_mes.gif'
            header='Descubre!'
            description='Mas de 150 libros y 50 autores'
            idescription='3 libros'
          />
          <GiftItem 
            url='https://assets-global.website-files.com/6066efceac899333ef24572a/60b116850a0c37419ce80b6f_3_lee_mas.gif'
            header='Descubre!'
            description='Mas de 150 libros y 50 autores'
            idescription='lee mas'
          />
        </Grid>
        <span style={{textAlign: 'center', fontSize: '16px', backgroundColor: '#dcf4ff'}}>Fácil, flexible y sin compromisos de permanencia</span>
      </Segment>
    </>
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
