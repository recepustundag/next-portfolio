import { motion } from "framer-motion";
import Bar from "../components/Bar";
import { languages, tools } from "../utils/data";
import { fadeInUp } from "../animations";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      <div className="grid md:grid-cols-2 gap-x-6">
        <div>
          <h5 className="my-3 text-2xl fon-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((lang) => (
              <Bar data={lang} key={lang.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl fon-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
