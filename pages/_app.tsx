import Head from 'next/head'
import {ThemeProvider} from 'next-themes'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Recep Üstündağ Portfolio</title>
      </Head>
    <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32'>
      <div className='col-span-12 p-4 text-center bg-white dark:bg-dark-500 rounded-2xl lg:col-span-3 shadow-custom-light dark:shadow-custom-dark'>
        <Sidebar />
      </div>
      <div className='flex flex-col col-span-12 bg-white dark:bg-dark-500 rounded-2xl lg:col-span-9'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default MyApp;
