import { 
  Header
} from 'semantic-ui-react';

export default function InfoHeader({ header }){
  return(
    <div className='bookTitleSection'>
      <Header 
        as='h1'
        style={{ fontFamily: 'Copernicus,"Libre Baskerville",Georgia,serif', fontSize: '3.2rem' }}
      >
        {header}
      </Header>
    </div>
  )
}
