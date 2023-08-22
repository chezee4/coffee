import {FC} from 'react';

import SectionBg from "../../SectionBg";
import FilterProvider from "../../context/box";
import CoffeeList from "../../CoffeeList";
import SectionDescription from "../../SectionDescription";

import cupOfCoffee from "../../../assets/img/CupOfCoffee.jpg";
const ForYourPleasurePage: FC = () => {
    return (
        <main>
        <SectionBg variant="ForYourPlace" title="For your pleasure" />
        <SectionDescription photo={cupOfCoffee} />
        <section className="mt-24">
          <FilterProvider>
            <CoffeeList />
          </FilterProvider>
        </section>
      </main>
    );
};

export default ForYourPleasurePage;