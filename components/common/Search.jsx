import { LuSearch } from "react-icons/lu";
const Search = () => {
  return (
    <div className="flex items-center border border-neutral-500 bg-white dark:bg-black dark:bg-opacity-50 bg-opacity-50 rounded-lg pr-4">
      <input
        type="text"
        placeholder="Search Here"
        className="w-[400px] bg-transparent py-2 px-4 outline-none dark:text-neutral-400 text-neutral-600 dark:placeholder:text-neutral-400 placeholder:text-neutral-600 placeholder:font-normal"
      />
      <button>
        <LuSearch className="text-neutral-500 dark:text-neutral-400" />
      </button>
      {/* <div className="absolute  p-4 bg-white dark:bg-neutral-950 dark:bg-opacity-90 bg-opacity-90 backdrop-blur-md w-full top-full rounded-lg">
        search result
      </div> */}
    </div>
  );
};

export default Search;
