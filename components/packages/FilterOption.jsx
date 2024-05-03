import React from "react";
import { Checkbox } from "../ui/checkbox";

const FilterOption = ({ label, reg }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={reg} />
      <label
        htmlFor={reg}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-neutral-400"
      >
        {label}
      </label>
    </div>
  );
};

export default FilterOption;
