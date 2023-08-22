import { FC } from "react";

import SectionBg from "../../SectionBg";
import Filter from "../../Filter";
import FilterProvider from "../../context/box";
import CoffeeList from "../../CoffeeList";
import SectionDescription from "../../SectionDescription";

import imgGirl from "../../../assets/img/HomeGirl.jpg";

const OurCoffeePage: FC = () => {
  return (
    <main>
      <SectionBg variant="OurCoffee" title="Our Coffee" />
      <SectionDescription  photo={imgGirl}/>
      <section>
        <FilterProvider>
          <Filter />
          <CoffeeList />
        </FilterProvider>
      </section>
    </main>
  );
};

export default OurCoffeePage;
