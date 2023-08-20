import { FC } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../Constants";
import { Product } from "../../model";
const ProductPage: FC = () => {
  const { id } = useParams();
  const { description, price, country, title } = products.find(
    (coffee) => coffee.id === id
  ) as Product;
  return <div></div>;
};

export default ProductPage;
