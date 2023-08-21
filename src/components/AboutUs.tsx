import { FC } from "react";
import { motion } from "framer-motion";
import { AboutUsText } from "./Constants";
import HeaderInfo from "./HeaderInfo";

const textAnimation = {
  initial: { opacity: 0, scale: 0.8, y: -20 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 1 },
};
const AboutUs: FC = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="max-w-[590px] text-center my-20 mx-3">
        <HeaderInfo title= "About Us"/>
        <motion.div {...textAnimation}>
          <p className=" text-sm mb-5">{AboutUsText[0]}</p>
          <p className=" text-sm">{AboutUsText[1]}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
