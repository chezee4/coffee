import { FC } from "react";
import { motion } from "framer-motion";

import Logo from "../../assets/img/Beens.png";

interface HeaderInfoProps {
  title: string;
}

const textAnimation = {
  initial: { opacity: 0, scale: 0.8, y: -20 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 1 },
};

const HeaderInfo: FC<HeaderInfoProps> = ({ title }) => {
  return (
    <div className="m-auto text-center">
      <motion.h4 {...textAnimation} className="text-2xl font-bold">
        {title}
      </motion.h4>
      <motion.img
        {...textAnimation}
        src={Logo}
        alt="Logo"
        className="m-auto mb-10"
      />
    </div>
  );
};

export default HeaderInfo;
