import { Product } from "../model";


export const changeClass = (isActive: boolean, isHovered: boolean , classNormal: string) =>
    isActive && !isHovered ? classNormal + " bg-[#c4c2c2]/25" : classNormal;

export const bestCoffee = (products: Product[]) =>
  [...products].sort((prev, next) => next.rating - prev.rating);

