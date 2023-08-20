import { FC } from "react";
import { Product } from "../model";

interface ProductItemProps {
  product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { img, alt, title, price } = product;
  return (
    <div className=" rounded-lg bg-white/60 p-4 text-right cursor-pointer transition-all duration-300 ease-linear hover:scale-105 hover:bg-white/65 hover:shadow-xl">
      <img
        src={img}
        alt={alt}
        className=" w-[160px] h-[150px] mt-20px mx-auto "
      />
      <h4 className="text-center my-3 text-sm">{title}</h4>
      <span className="text-sm">{price}</span>
    </div>
  );
};

export default ProductItem;
