import { FC } from "react";

import SectionBg from "../../SectionBg";
import Filter from "../../Filter";
import FilterProvider from "../../context/box";
import CoffeeList from "../../CoffeeList";
import SectionDescription from "../../SectionDescription";

const OurCoffee: FC = () => {
  return (
    <main>
      <SectionBg variant="OurCoffee" title="Our Coffee" />
      <SectionDescription />
      <section>
        <FilterProvider>
          <Filter />
          <CoffeeList />
        </FilterProvider>
      </section>
    </main>
  );
};

export default OurCoffee;
