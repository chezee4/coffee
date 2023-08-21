import React, { FC, useContext } from "react";
import { motion } from "framer-motion";

import { filterContext } from "../context/index";
import { FilterState } from "../model";

const Filter: FC = () => {
  const contextValue = useContext(filterContext);
  const { filter, setFilter } = contextValue || {};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setFilter) {
      setFilter((prevFilter: FilterState) => ({
        ...prevFilter,
        search: e.target.value,
      }));
    }
  };

  const onToggleFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    const current = event.currentTarget.textContent;
    if (setFilter && current !== null) {
      setFilter((prevFilter: FilterState) => {
        if (current === prevFilter.filterButton) {
          return { ...prevFilter, filterButton: "all" };
        }
        return { ...prevFilter, filterButton: current };
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -80 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-between items-center max-w-[900px] mx-auto my-16"
    >
      <div>
        <label htmlFor="search" className="mr-8">
          Looking for
        </label>
        <input
          value={filter?.search}
          onChange={handleInputChange}
          type="text"
          name="search"
          autoComplete="off"
          placeholder="start typing here..."
          className=" shadow-inputSearchShadow border-none outline-none pl-3 py-1 rounded-md  transition-all duration-300  ease-linear hover:shadow-inputSearchShadowHover "
        />
      </div>
      <div className="flex gap-2 items-center">
        <span className="mr-6">Or filter </span>
        <button
          className="px-5 py-2 shadow-buttonShadow rounded-md transition-all duration-300  ease-linear hover:scale-105"
          onClick={onToggleFilter}
        >
          Brazil
        </button>
        <button
          className="px-5 py-2 shadow-buttonShadow rounded-md transition-all duration-300  ease-linear hover:scale-105"
          onClick={onToggleFilter}
        >
          Kenya
        </button>
        <button
          className="px-5 py-2 shadow-buttonShadow rounded-md transition-all duration-300  ease-linear hover:scale-105"
          onClick={onToggleFilter}
        >
          Columbia
        </button>
      </div>
    </motion.div>
  );
};

export default Filter;
