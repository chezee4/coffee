import { FC, useContext } from "react";

import { filterContext } from "../context/index";
import { products } from "../Constants";
import { onFilter } from "../utils";
import CoffeeListItem from "../CoffeeListItem";

const CoffeeList: FC = () => {
  const contextValue = useContext(filterContext);
  const { filter } = contextValue || {};
  const filteredProduct = onFilter(products, filter!);

  return (
    <div className="grid w-full max-w-4xl grid-cols-[repeat(auto-fill,220px)] justify-center gap-8 mt-6 px-2 mx-auto">
      {filteredProduct.map((product, index) => (
        <CoffeeListItem key={product.id} product={product} index={index} />
      ))}
    </div>
  );
};

export default CoffeeList;
