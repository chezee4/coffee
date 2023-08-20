import { FC } from "react";

import { AboutUsText } from "./Constants";
import Logo from "../assets/img/Beens.png";

const AboutUs: FC = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="max-w-[590px] text-center my-20 mx-3">
        <h3 className="text-2xl font-bold">About Us</h3>
        <img src={Logo} alt="Logo" className="m-auto mt-5 mb-10" />
        <p className=" text-sm mb-5">{AboutUsText[0]}</p>
        <p className=" text-sm">{AboutUsText[1]}</p>
      </div>
    </section>
  );
};

export default AboutUs;
