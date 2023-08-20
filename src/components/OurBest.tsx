import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { bestCoffee } from "./utils";
import ProductItem from "./Product";
import { products } from "./Constants";

const OurBest: FC = () => {
  const bestProduct = bestCoffee(products);

  return (
    <section className="flex justify-center items-center bg-[url('./assets/img/BestProduct.jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center items-center w-full my-20">
        <motion.h3
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold"
        >
          Our best
        </motion.h3>
        <div className="grid w-full max-w-4xl grid-cols-[repeat(auto-fill,220px)] justify-center gap-8 mt-6">
          {bestProduct.slice(0, 3).map((product, index) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 * index,
                  ease: "linear",
                }}
              >
                <ProductItem product={product} />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBest;
