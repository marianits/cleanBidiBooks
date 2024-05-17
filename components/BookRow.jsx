import { Button, Header, Image } from 'semantic-ui-react';

export default function BookRow({ buttonOne, buttonTwo, number, srcImage, avance, precio, title = 'Un animal Salvaje', description, author, bookId, buttonOneF }){
  return(
    <li style={{marginBottom: '30px', paddingBottom: '30px', display: 'flex', flexWrap: 'wrap', marginRight: '-15px',marginLeft: '-15px'}}>
      <div className='book-content' style={{flex: '0 0 75%', maxWidth: '75%'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px'}}>
          <div className='bookImage' style={{width: '15%', paddingRight: '15px', position: 'relative', fontFamily: 'Open Sans,sans-serif', fontWeight: '400px'}}>
            {/* Cambiar imagen aqui para demo */}
            <Image src={srcImage} alt='animalSalvaje' width={136} height={217} />
            <span
              style={{
                position: 'absolute',
                top: '-15px',
                left: '-7px',
                content: '""',
                width: '45px',
                height: '45px',
                backgroundColor: '#131313',
                border: '4px solid #FFF',
                color: '#fff',
                fontFamily: 'Lora,serif',
                fontSize: '16px',
                boxShadow: '0 1px 25px #0000001a',
                borderRadius: '50%',
                textAlign: 'center',
                paddingTop: '5px'
              }}
            >
              {number}
            </span>
          </div>
          <div className='bookDetails' style={{width: '85%', paddingLeft: '15px', paddingRight: '32px'}}>
          <Header as='h2' className='title' style={{fontSize: '22px', fontWeight: '400', lineHeight: '1.2', color: '#ee6314'}}>{title}</Header>
          <Header as='h3' className='author' style={{fontWeight: '400', fontSize: '13px'}}>{author}</Header>
          <p className='description' style={{fontSize: '14px', lineHeight: '24px', lineHeight: '150%', fontWeight: '400'}}>
              {description}
          </p>
          </div>
        </div>
      </div>

      <div className='book-action' style={{background: '#F4F4F4', borderRadius: '8px', padding: '.5rem 1.5rem 1.5rem'}}>
        <div style={{marginTop: '7.5px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
          <div className='bookProgress' style={{color: '#3c4858'}}>
            <strong>{avance ? avance : precio}</strong>{avance ? ' de Avance' : ' $Bs'}
          </div>
          <Button 
            className='continueReadingBtn'
            style={{background: '#EE6314', color: '#fff'}}
            onClick={() => buttonOneF(bookId)}
          >
            {buttonOne}
          </Button>
          <Button
            className='startAgainBtn'
            style={{border: '1px solid #EE6314', color: '#ee6314', background: 'F4F4F4', marginTop: '7.5px'}}
            onClick={() => buttonOneF(bookId)}
          >
            {buttonTwo}
          </Button>
        </div>
      </div>
    </li>
  )
}