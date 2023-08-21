import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import {Product, FilterState}  from "../model"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const changeClass = (
  isActive: boolean,
  isHovered: boolean,
  classNormal: string
) => (isActive && !isHovered ? classNormal + " bg-[#c4c2c2]/25" : classNormal);


export const bestCoffee = (products: Product[]) =>
  [...products].sort((prev, next) => next.rating - prev.rating);


export const onFilter = (products: Product[], filter: FilterState) => {
  let newProducts = products;
  newProducts = products.filter((product) => {
    return product.title.toLowerCase().startsWith(filter.search.toLowerCase());
  });
  return filter.filterButton === "all"
    ? newProducts
    : newProducts.filter(
        (newProduct) => newProduct.country === filter.filterButton
      );
};
