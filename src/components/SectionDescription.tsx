import {FC} from 'react';
import { motion } from 'framer-motion';

import HeaderInfo from "./HeaderInfo";
import { ourCoffeDescripiton } from "./Constants";
interface SectionDescriptionProps {
  photo: string;

}
const SectionDescription: FC<SectionDescriptionProps> = ({ photo}) => {
    return (
        <section>
        <div className="flex justify-between max-w-[800px] mt-16 mb-5 mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8,  x:-100}}
            whileInView={{ opacity: 1, scale: 1,  x:0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img src={photo} alt="girl" />
          </motion.div>

          <div className="max-w-[350px]">
            <HeaderInfo title="About our beans" />
            <motion.p
              initial={{ opacity: 0, scale: 0.8, y: -40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              {ourCoffeDescripiton}
            </motion.p>
          </div>
        </div>
      </section>
    );
};

export default SectionDescription;