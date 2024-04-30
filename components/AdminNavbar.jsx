import { useState } from 'react';
import { useRouter } from "next/router";
import { Dropdown, DropdownItem, DropdownMenu, Icon, Menu } from 'semantic-ui-react';
import Image from 'next/image';

export function AdminNavbar() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('/');
  const handleItemClick = async name => {
    setActiveItem(name);
    await router.push({ pathname: `/admin/${name}` });
  }

  return (
    <Menu inverted color='purple' style={{ borderRadius: 0 }}>
      <Menu.Item
        active={activeItem === '/'}
        onClick={() => handleItemClick('/')}
      >
        <Image alt='logo' src='/../public/libro.png' width={25} height={25}/>
      </Menu.Item>
      <Menu.Item
        name='LIBROS'
        active={activeItem === 'books'}
        onClick={() => handleItemClick('books')}
        style={{fontFamily: 'Open Sans,sans-serif', color: '#FFFFFF !important'}}
      />
      <Menu.Item
        name='GENEROS'
        active={activeItem === 'generos'}
        onClick={() => handleItemClick('generos')}
        style={{fontFamily: 'Open Sans,sans-serif', color: '#FFFFFF !important'}}
      />
      <Menu.Item
        name='AUTORES'
        active={activeItem === 'autores'}
        onClick={() => handleItemClick('autores')}
        style={{fontFamily: 'Open Sans,sans-serif', color: '#FFFFFF !important'}}
      />
      <Menu.Item position='right' style={{paddingRight:'10px'}}>
        <Dropdown item text=''>
          <DropdownMenu>
            <DropdownItem>Mi cuenta</DropdownItem>
            <DropdownItem>Cerrar sesion</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Image alt='logo' src='/../public/youth.png' width={25} height={25}/>
      </Menu.Item>
    </Menu>
  )
}
