import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Product } from "../model";

interface CoffeeListItemProps {
  product: Product;
  index: number;
}
const CoffeeListItem: FC<CoffeeListItemProps> = ({ product, index }) => {
  const { title, img, alt, price, country } = product;
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.2 * index,
        ease: "linear",
      }}
      className=" list-none rounded-lg bg-white p-4 text-right cursor-pointer shadow-customShadow transition-all duration-300  ease-linear hover:scale-105 "
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={img}
          alt={alt}
          className=" w-[160px] h-[150px] mt-20px mx-auto  "
        />
        <h4 className="text-center my-3 text-sm">{title}</h4>
        <span className="block mb-4">{country}</span>
        <span className="text-sm">{price}</span>
      </Link>
    </motion.li>
  );
};

export default CoffeeListItem;
