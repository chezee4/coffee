import { FC } from "react";
import { useParams } from "react-router-dom";

import SectionBg from "../../SectionBg";
import ProductDescription from "../../ProductDescription";

const ProductPage: FC = () => {
  const { id } = useParams();
 
  return (
    <main>
      <SectionBg variant="OurCoffee" title="Our Coffee" />
      <section>
       <ProductDescription id={id!}/>
      </section>
    </main>
  );
};

export default ProductPage;
