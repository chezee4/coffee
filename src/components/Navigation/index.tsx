import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { changeClass } from "../utils";

import coffeeBeans from "../../assets/img/coffee-beans.svg";

const Navigation: FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const classNormal =
    "p-1.5 rounded-2xl transition-all duration-200 ease-linear hover:bg-[#c4c2c2]/25";

  return (
    <motion.ul
      initial={{ opacity: 0, scale: 0.8, y: -30, x: -120 }}
      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      transition={{ duration: 0.8 }}
      className="  relative flex max-w-max sm:gap-x-8 gap-x-3 pt-11 ml-2 sm:ml-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {window.innerWidth < 480 ? null : (
        <img
          src={coffeeBeans}
          alt="beens"
          className="absolute -left-[1.6rem] bottom-[0.9rem]"
        />
      )}
      <li className="  sm:text-base text-xs">
        <NavLink
          to="/"
          className={({ isActive }) =>
            changeClass(isActive, isHovered, classNormal)
          }
        >
          Coffee house
        </NavLink>
      </li>
      <li className=" sm:text-base text-xs">
        <NavLink
          to="/our-coffee"
          className={({ isActive }) =>
            changeClass(isActive, isHovered, classNormal)
          }
        >
          Our coffee
        </NavLink>
      </li>
      <li className="  sm:text-base text-xs">
        <NavLink
          to="/for-your-pleasure"
          className={({ isActive }) =>
            changeClass(isActive, isHovered, classNormal)
          }
        >
          For your pleasure
        </NavLink>
      </li>
    </motion.ul>
  );
};

export default Navigation;
