import PackageCard from "../common/Cards/PackageCard";
import SectionTitle from "../common/SectionTitle";
import { FaFilter } from "react-icons/fa6";
import { Checkbox } from "../ui/checkbox";
import FilterOption from "./FilterOption";

const Packages = () => {
  return (
    <div className="py-10">
      <SectionTitle
        title="Select your package"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis facilis voluptatem? Dolores, libero sunt?"
      />

      <div className="w-full flex justify-end gap-6 mt-10 relative">
        <div className="w-1/5 bg-brandText rounded-lg bg-opacity-10 p-6 ">
          <h2 className="flex items-center gap-2 underline">
            <FaFilter className="text-brandText" /> Filter your search
          </h2>

          <ul className="mt-6 flex flex-col gap-3">
            <li>
              <FilterOption label="All packages" reg="all" />
            </li>
            <li>
              <FilterOption label="Featured" reg="featured" />
            </li>
            <li>
              <FilterOption label="Best Rating" reg="rating" />
            </li>
            <li>
              <FilterOption label="Price (Low to High)" reg="low" />
            </li>
            <li>
              <FilterOption label="Price (High to Low)" reg="high" />
            </li>
          </ul>
        </div>
        <div className="w-4/5">
          <div className="flex items-center gap-2 mb-6 hidden">
            <p className="px-3 py-1.5 bg-brandText text-sm dark:bg-opacity-10 bg-opacity-10 rounded-md">
              Filter Applied:
            </p>
            <p className="px-3 py-1.5 bg-brandText text-sm dark:bg-opacity-10 bg-opacity-10 rounded-md">
              All Packages
            </p>
            <p className="px-3 py-1.5 bg-brandText text-sm dark:bg-opacity-10 bg-opacity-10 rounded-md">
              Featured
            </p>
          </div>
          <div className="w-full grid grid-cols-3 gap-4">
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
