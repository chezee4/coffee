import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Product } from "../model";

interface CoffeeListItemProps {
  product: Product;
  index: number;
}
const CoffeeListItem: FC<CoffeeListItemProps> = ({ product, index }) => {
  const { title, img, alt, price, country } = product;
  const [hover, setHover] = useState(true);
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.8 }}
      whileHover={{
        scale: 1.1,
        transition:{ duration: 0.35, delay: 0 }
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: hover? 0.8 : 0.35,
          delay: hover ? 0.2 * index : 0,
          ease: "linear",
        },
      }}
      onHoverStart={() => setHover(false)}
      onHoverEnd={() => setHover(true)}
      className=" list-none rounded-lg bg-white p-4 text-right cursor-pointer shadow-customShadow"
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
