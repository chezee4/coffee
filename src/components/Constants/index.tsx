import { v4 as uuidv4 } from "uuid";
import Product1 from "../../assets/img/Product1.jpg";
import Product2 from "../../assets/img/Product2.jpg";
import Product3 from "../../assets/img/Product3.jpg";

import { Product } from "../model";

const _description: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const products: Product[] = [
  {
    id: uuidv4(),
    img: Product1,
    alt: "Best of the best Product",
    title: "Solimo Coffee Beans 2 kg",
    price: "10.99$",
    country: "Brazil",
    description: _description,
    rating: 4.9,
  },
  {
    id: uuidv4(),
    img: Product2,
    alt: "Best of the best Product",
    title: "Presto Coffee Beans 1 kg",
    price: "15.99$",
    country: "Columbia",
    description: _description,
    rating: 3.8,
  },
  {
    id: uuidv4(),
    img: Product3,
    alt: "Best of the best Product",
    title: "AROMISTICO Coffee 1 kg",
    price: "6.99$",
    country: "Kenya",
    description: _description,
    rating: 4,
  },
  {
    id: uuidv4(),
    img: Product2,
    alt: "Best of the best Product",
    title: "AROMISTICO Coffee 1 kg",
    country: "Brazil",
    price: "10.99$",
    description: _description,
    rating: 3,
  },
  {
    id: uuidv4(),
    img: Product1,
    alt: "Best of the best Product",
    title: "AROMISTICO Coffee 1 kg",
    country: "Kenya",
    price: "10.99$",
    description: _description,
    rating: 3,
  },
  {
    id: uuidv4(),
    img: Product3,
    alt: "Best of the best Product",
    title: "AROMISTICO Coffee 1 kg",
    country: "Columbia",
    price: "10.99$",
    description: _description,
    rating: 3.5,
  },
];

export const ourCoffeDesripiton: string = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n
 \nAfraid at highly months do things on at. Situation recommend objection do intention so questions.
 \nAs greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.`;

export const AboutUsText: string[] = [
  `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
Afraid at highly months do things on at. Situation recommend objection do intention
 so questions. As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face.`,
  `Now residence dashwoods she excellent you. Shade being under his bed her, Much
read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
horrible but confined day end marriage. Eagerness furniture set preserved far
recommend. Did even but nor are most gave hope. Secure active living depend son
repair day ladies now.
`,
];
