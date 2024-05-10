"use client";

import { handleFetchAllPackages } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import SearchCard from "./Cards/SearchCard";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["searchData"],
    queryFn: handleFetchAllPackages,
    staleTime: 10000,
  });

  return (
    <div className="flex items-center border border-neutral-500 bg-white dark:bg-black dark:bg-opacity-50 bg-opacity-50 rounded-lg pr-4">
      <input
        type="text"
        placeholder="Search Here"
        onChange={handleChange}
        className="min-w-[300px] max-w-[400px] bg-transparent py-2 px-4 outline-none dark:text-neutral-400 text-neutral-600 dark:placeholder:text-neutral-400 placeholder:text-neutral-600 placeholder:font-normal"
      />
      <button>
        <LuSearch className="text-neutral-500 dark:text-neutral-400" />
      </button>
      {searchText.length > 0 && (
        <div className="absolute w-1/2 p-4 bg-white dark:bg-neutral-950 dark:bg-opacity-90 bg-opacity-90 backdrop-blur-md top-full rounded-lg grid grid-cols-4 gap-3">
          {isLoading && <p>Loading...</p>}
          {!isLoading &&
            data
              .filter((item) =>
                item.placeName.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((place, i) => {
                return (
                  <SearchCard
                    key={i}
                    place={place}
                    setSearchText={setSearchText}
                  />
                );
              })}
        </div>
      )}
    </div>
  );
};

export default Search;
