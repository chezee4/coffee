import { createContext, Dispatch, SetStateAction } from "react";

interface FilterContextType {
  filter: {
    search: string;
    filterButton: string;
  };
  setFilter: Dispatch<SetStateAction<{
    search: string;
    filterButton: string;
  }>>;
}

export const filterContext = createContext<FilterContextType | null>(null);
