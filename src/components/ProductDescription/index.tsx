import { FC } from "react";
import { motion } from "framer-motion";

import HeaderInfo from "../HeaderInfo";
import { products } from "../Constants";
import { Product } from "../model";

interface ProductDescriptionProps {
  id: string;
}

const ProductDescription: FC<ProductDescriptionProps> = ({ id }) => {
  const { description, price, country, img, alt } = products.find(
    (coffee) => coffee.id === id
  ) as Product;

  return (
    <div className="flex justify-between max-w-[850px] mt-16 mb-5 mx-auto">
      <motion.div
        initial={{ opacity: 0,  x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className=" w-[400px] h-[400px]"
      >
        <img
          src={img}
          alt={alt}
          className="w-full h-full shadow-customShadow"
        />
      </motion.div>
      <motion.div
         initial={{ opacity: 0,  y: -80 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
        className=" max-w-sm "
      >
        <HeaderInfo title="About it" />
        <div className="mt-8">
          <p className="mb-7">
            <span className="font-bold text-lg">
              County: &nbsp;
              <span className=" font-normal text-base">{country}</span>
            </span>
          </p>
          <p>
            <span className="font-bold text-lg">Description: &nbsp; </span>
            <span className="font-normal text-base">{description}</span>
          </p>
          <p className="mt-10">
            <span className="font-bold text-lg">Price: &nbsp; </span>
            <span className=" text-2xl">{price}</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDescription;
