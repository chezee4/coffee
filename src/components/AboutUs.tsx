import { FC } from "react";
import { motion } from "framer-motion";
import { AboutUsText } from "./Constants";
import Logo from "../assets/img/Beens.png";

const AboutUs: FC = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="max-w-[590px] text-center my-20 mx-3">
        <motion.h3
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y:0}}
          transition={{ duration: 1 }}
          className="text-2xl font-bold"
        >
          About Us
        </motion.h3>
        <motion.img 
         initial={{ opacity: 0, scale: 0.8, y: -20 }}
         whileInView={{ opacity: 1, scale: 1, y:0 }}
         transition={{ duration: 1 }}
         src={Logo} 
         alt="Logo" 
         className="m-auto mt-5 mb-10" />
        <motion.p
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" text-sm mb-5"
        >
          {AboutUsText[0]}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" text-sm"
        >
          {AboutUsText[1]}
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUs;
