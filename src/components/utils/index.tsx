import { Product } from "../model";


export const changeClass = (isActive: boolean, isHovered: boolean , classNormal: string) =>
    isActive && !isHovered ? classNormal + " bg-[#f0f0f0]/25" : classNormal;

export const bestCoffee = (products: Product[]) =>
  [...products].sort((prev, next) => next.rating - prev.rating);

