import { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

type NavType = {
  active: string;
  setActive: Function;
  name: string;
  route: string;
};

const NavItem: FunctionComponent<NavType> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <a>
        <span className='mx-2 cursor-pointer hover:border-b-4 hover:text-green' onClick={() => setActive(name)}>
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setactiveItem] = useState<string>('');

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setactiveItem('About');
    if (pathname === '/projects') setactiveItem('Projects');
    if (pathname === '/experience') setactiveItem('Experience');
    if (pathname === '/skils') setactiveItem('Skils');
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className='text-xl font-bold border-b-4 text-green dark:text-white border-green md:text-2xl'>{activeItem}</span>
      <div className='flex space-x-5 text-red-400 dark:text-white font-lg'>
        <NavItem active={activeItem} setActive={setactiveItem} key="About" name='About' route='/' />
        <NavItem active={activeItem} setActive={setactiveItem} key="Projects" name='Projects' route='/projects' />
        <NavItem active={activeItem} setActive={setactiveItem} key="Experience" name='Experience' route='/experience' />
        <NavItem active={activeItem} setActive={setactiveItem} key="Skils" name='Skils' route='/skils' />
      </div>
    </div>
  );
};

export default Navbar;
