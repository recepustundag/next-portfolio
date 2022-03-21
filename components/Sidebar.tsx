import Image from "next/image";
import { useTheme } from 'next-themes';
import { AiFillGitlab, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import me from '../public/me.jpg'

const Sidebar = () => {

  const {theme, setTheme} = useTheme()

  const changeTheme = () => {    
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <Image
        src={me}
        alt="avatar"
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-koushan'>
        <span className="text-green ">Recep</span> Üstündağ
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'>Front-End Developer</p>
      <a href="/recep_ustundag_resume.pdf" className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500' download='recep_ustundag_resume'>
        <GiTie className='w-6 h-6' /> Download Resume
      </a>

      <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
        <a href='https://github.com/recepustundag' target="_blank noreferrer">
          <AiFillGitlab className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://www.linkedin.com/in/recep-%C3%BCst%C3%BCnda%C4%9F-45312984/' target="_blank noreferrer">
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
      </div>

      <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:text-white' style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <span>Kocaeli, Turkey</span>
        </div>
        <p className='my-2'>ustundagrecep@gmail.com</p>
        <p className='my-2'>0543 696 1631</p>
      </div>

      <button className='w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none' onClick={() => window.open('mailto:ustundagrecep@gmail.com')}>
        Email me
      </button>
      <button
        onClick={changeTheme}
        className='w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green to-blue-400'>Change Theme</button>
    </div>
  );
};

export default Sidebar;
