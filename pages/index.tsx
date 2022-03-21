import { motion } from 'framer-motion';
import { GetServerSideProps } from 'next';
import { fadeInUp, stagger } from '../animations';
import ServiceCard from '../components/ServiceCard';
import { services } from '../utils/data';

const index = ({ data }) => {

  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Accomplished Front End Web Developer with 7 years designing online assets to attract maximum engagement and conversions from ad placements.Expertise in developing user interfaces with HTML, CSS and JavaScript and solid understanding. Proven team player when working with internal cross-functional departments. Thrive in hands-on, actionoriented culture by working well under pressure and adapting to change quickly.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="my-3 text-xl font-medium">Who AM I</h6>
        <div className="grid gap-6 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate" >
        {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

export const getServerSideProps = async (context: GetServerSideProps) => {
  const response = await fetch('http://localhost:3000/api/services');
  const res = await response.json();

  return {
    props: {
      data: res.services,
    },
  };
};
