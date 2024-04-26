import { Header } from 'semantic-ui-react';

export default function BookGrid({ header }){
  return(
    <div style={{display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px' }}>
      <div style={{textAlign: 'center', maxWidth: '100%', flexGrow: 1}}>
        <Header
          as='h1'
          style={{marginBottom: '30px', fontFamily: 'Lora,serif', fontWeight: '400'}}
        >
          {header}
        </Header>
      </div>
    </div>
  )
}
