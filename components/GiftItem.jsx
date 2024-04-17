import { GridColumn, Header } from 'semantic-ui-react';
import Image from 'next/image';

export default function GiftItem({ url, header, description, idescription }){
  return(
    <GridColumn width={5} style={{ marginLeft: '15px'}}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '35px 0 20px' }}>
        <Image src={url} alt={idescription} width={160} height={128} />
        <Header 
          as='h4'
          style = {{
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '24px',
            borderRadius: '12px',
            fontWeight: '500',
            lineHeight: '1'
          }}>
          {header}
        </Header>
        <p style={{textAlign: 'center', marginBottom: '10px', fontSize: '18px', fontWeight: '400', lineHeight: '1.3'}}>
          {description}
        </p>
      </div>
    </GridColumn>
  )
}
