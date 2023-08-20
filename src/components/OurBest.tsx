import { FC } from "react";
import { Link } from "react-router-dom";
import { products } from "./Constants";
import { bestCoffee } from "./utils";
import ProductItem from "./Product";

const OurBest: FC = () => {
  const bestProduct = bestCoffee(products);

  return (
    <section className="flex justify-center items-center bg-[url('./assets/img/BestProduct.jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center items-center w-full my-20">
        <h3 className="text-2xl font-bold">Our best</h3>
        <div className="grid w-full max-w-4xl grid-cols-[repeat(auto-fill,220px)] justify-center gap-8 mt-6">
          {bestProduct.slice(0, 3).map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductItem product={product} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBest;
