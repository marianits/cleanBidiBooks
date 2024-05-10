import { Grid } from 'semantic-ui-react';
import InfoImage from 'components/InfoImage';
import InfoHeader from 'components/InfoHeader';
import Link from 'next/link';

export default function BookInformation ({ author }) {
  return(
    <Grid stackable columns={2}>
      <Grid.Column width={4}>
        <InfoImage imageURL={author.fotoPerfil}/>
      </Grid.Column>
      <Grid.Column width={11} style={{display: 'flex', flexDirection: 'column'}}>
        <InfoHeader header={`${author.apellidos}, ${author.nombre}`}/>
        <div className='authorMetaDataSection' style={{ marginBottom: '10px'}}>
          <div className='dataTitle' style={{ color: 'black', fontWeight: 'bold', width: '20%', float: 'left', margin: '1px 0px'}}>
            Instagram:
          </div>
          <Link  key='instagram' href={`https://www.instagram.com/${author.redesSociales.instagram}`} style={{float: 'left', width: '75%', margin: '1px 0px'}}>
            {`https://www.instagram.com/${author.redesSociales.instagram}`}
          </Link>
          <div className='dataTitle' style={{ color: 'black', fontWeight: 'bold', width: '20%', float: 'left', margin: '1px 0px'}}>
            Facebook:
          </div>
          <Link  key='facebook' href={`https://www.facebook.com/${author.redesSociales.facebook}`} style={{float: 'left', width: '75%', margin: '1px 0px'}}>
            {`https://www.facebook.com/${author.redesSociales.facebook}`}
          </Link>
          <div className='dataTitle' style={{ color: 'black', fontWeight: 'bold', width: '20%', float: 'left', margin: '1px 0px'}}>
            Twitter:
          </div>
          <Link  key='twitter' href={`https://www.twitter.com/${author.redesSociales.twitter}`} style={{float: 'left', width: '75%', margin: '1px 0px'}}>
            {`https://www.twitter.com/${author.redesSociales.twitter}`}
          </Link>
        </div>
        <div className='bookDetails'>
          <span 
            style={{font: '400 1.2rem/1.4375 "Proxima Nova",Montserrat,Arial,sans-serif', marginTop: '10px'}}
          >
            {author.biografia}
          </span>
        </div>
      </Grid.Column>
    </Grid>
  )
}

export const getServerSideProps = async (ctx) => {
  const { query: { id } } = ctx;
  const res = await fetch(`http://localhost:3000/api/authors/${id}`);
  const author = await res.json();
  return {
    props: {
      author,
    }
  }
};