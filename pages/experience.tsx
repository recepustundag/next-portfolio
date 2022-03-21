import { motion } from "framer-motion";
import Bar from "../components/Bar";
import { experiences } from "../utils/data";
import { fadeInUp } from "../animations";

const Resume = () => {
  experiences.map(test => {
    console.log(test.name);
    
  })
  return (
    <div className="px-6 py-2">
      {/* <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-2xl font-bold">Ondokuzmayıs Univercity</h5>
            <p className="font-semibold">Computer Education and Instructional Technology</p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam labore ratione error sed reiciendis velit, voluptates ab! Recusandae nisi neque unde tenetur veniam accusantium atque
              laborum corporis officiis nostrum. Itaque.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-2xl font-bold">Front-End Developer</h5>
            <p className="font-semibold">Turhost</p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam labore ratione error sed reiciendis velit, voluptates ab! Recusandae nisi neque unde tenetur veniam accusantium atque
              laborum corporis officiis nostrum. Itaque.
            </p>
          </div>
        </motion.div>
      </div> */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <h5 className="my-3 text-2xl font-bold">Work History</h5>
        {experiences.reverse().map((experience) => {
          return (<div key={experience.startDate}>
            <h5 className="my-2 text-2xl font-bold">{experience.job}</h5>
            <p className="mb-3 font-semibold">
              {experience.name} / {experience.startDate} - {experience.endDate}
            </p>
            <ul className="pl-3 list-disc">
              {experience.content.map((item) => {
                return(<li key={item}>{item}</li>);
              })}
            </ul>
          </div>);
        })}
      </motion.div>
    </div>
  );
};

export default Resume;
