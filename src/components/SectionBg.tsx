import { FC } from "react";
import { cva } from "class-variance-authority";
import { cn } from "./utils";

interface SectionBgProps {
  variant: "OurCoffee" | "ForYourPlace";
  title: string;
}
const SectionBgVariants = cva(
  "h-[220px] flex -mt-[72px] flex justify-center items-center  bg-cover bg-no-repeat",
  {
    variants: {
      variant: {
        OurCoffee: "bg-[url(./assets/img/ourCoffeeBg.png)]",
        ForYourPlace: "bg-[url(./assets/img/ForYourPlace.jpg)]",
      },
    },
  }
);
const SectionBg: FC<SectionBgProps> = ({ variant, title }) => {
  return (
    <section className={cn(SectionBgVariants({ variant }))}>
      <h1 className="mt-6 text-white text-4xl">{title}</h1>
    </section>
  );
};

export default SectionBg;
