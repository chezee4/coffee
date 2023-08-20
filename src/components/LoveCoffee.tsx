import { FC } from "react";
import Logo from "../assets/img/Beens.png";

const LoveCoffee: FC = () => {
  return (
    <section className="flex justify-center items-center bg-[url('./assets/img/OurCoffee.png')] bg-cover bg-no-repeat h-screen -mt-[68px]">
      <div className="flex flex-col items-center text-white text-center mx-3">
        <h1 className="text-4xl font-bold  drop-shadow-xl mb-4">
          Everything You Love About Coffee
        </h1>
        <img src={Logo} alt="Logo" className="invert" />
        <span className="text-2xl font-bold drop-shadow-xl mb-5 mt-11">
          We makes every day full of energy and taste
        </span>
        <span className="text-2xl font-bold drop-shadow-xl mb-5">
          Want to try our beans?
        </span>
        <button className=" border-2 border-[#60310d8c] rounded-[5px] bg-[#98633b29] shadow-lg px-12 py-2 transition-all duration-200 ease-linear text-gray-100 hover:bg-[#5c33138c] hover:scale-105">
          More
        </button>
      </div>
    </section>
  );
};

export default LoveCoffee;
