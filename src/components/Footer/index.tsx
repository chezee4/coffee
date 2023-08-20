import { FC } from "react";
import Navigation from "../Navigation";
import Logo from "../../assets/img/Beens.png";
const Footer: FC = () => {
  return (
    <footer className="flex flex-col items-center bg-[#e7d0b0]">
      <Navigation />
      <img src={Logo} alt="Logo" className="m-auto mt-5 pb-10" />
    </footer>
  );
};

export default Footer;
