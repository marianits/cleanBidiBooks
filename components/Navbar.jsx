import { useState } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import Image from 'next/image';

export function Navbar(props) {
  const [activeItem, setActiveItem] = useState('home');
  
  const handleItemClick = (name) => setActiveItem(name);

  return (
    <Menu color='orange' inverted>
      <Menu.Item
        name='Explorar'
        active={activeItem === 'explore'}
        onClick={() => handleItemClick('explore')}
      />
      <Menu.Item
        name='Cómo funciona'
        active={activeItem === 'info'}
        onClick={() => handleItemClick('info')}
      />
      <Menu.Item
        name='Mis libros'
        active={activeItem === 'myBooks'}
        onClick={() => handleItemClick('myBooks')}
      />
      <Menu.Item position='right'>
        <Image alt='logo' src='/../public/youth.png' width={25} height={25}/>
      </Menu.Item>
    </Menu>
  );
}