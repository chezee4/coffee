import React, { FC, useState } from "react";
import { filterContext } from "./index";

interface FilterProviderProps {
  children: React.ReactNode;
}

const FilterProvider: FC<FilterProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState({
    search: "",
    filterButton: "all",
  });

  return (
    <filterContext.Provider value={{ filter, setFilter }}>
      {children}
    </filterContext.Provider>
  );
};

export default FilterProvider;
