import { useState } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import Image from 'next/image';

export function Navbar(props) {
  const [activeItem, setActiveItem] = useState('explore');
  const handleItemClick = (name) => setActiveItem(name);

  return (
    <Menu inverted pointed secondary style={{backgroundColor: '#131313', borderRadius: 0}}>
      <Menu.Item
        name='EXPLORAR'
        active={activeItem === 'explore'}
        onClick={() => handleItemClick('explore')}
        style={{fontFamily: 'Open Sans,sans-serif', color: '#FFFFFF !important'}}
      />
      <Menu.Item
        name='COMO FUNCIONA'
        active={activeItem === 'info'}
        onClick={() => handleItemClick('info')}
        style={{fontFamily: 'Open Sans,sans-serif', color: '#FFFFFF !important'}}
      />
      <Menu.Item
        name='MIS LIBROS'
        active={activeItem === 'myBooks'}
        onClick={() => handleItemClick('myBooks')}
        style={{fontFamily: 'Open Sans,sans-serif', color: '#FFFFFF !important'}}
      />
      <Menu.Item position='right'>
        <form method='GET' action='/' id='main-search' style={{flex: 'max-content'}}>
          <div style={{position: 'relative', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', width: '100%'}}>
            <input type='text' style={{borderRadius: '2rem', zIndex: '0', padding: '.5rem 1rem', fontSize: '14px', color:'#333', height: '44px', width: '200px'}} placeholder='Título, autor...' />
            <div style={{position: 'relative', display: 'flex'}}>
              <button style={{width: '34px', height: '34px', marginTop: '5px', marginLeft: '-42px', padding: '5px', borderRadius: '2rem', borderTopLeftRadius: '2rem', borderBottomLeftRadius: '2rem' , background: '#ff4e18', border: 0}}>
                <Icon inverted name='search'/>
              </button>
            </div>
          </div>
        </form>
        {/* <Input
          action={{ type: 'submit', content: 'Go' }}
          placeholder='Título, autor...'
        /> */}
      </Menu.Item>
      <Menu.Item position='right'>
        <Image alt='logo' src='/../public/youth.png' width={25} height={25}/>
      </Menu.Item>
    </Menu>
  );
}