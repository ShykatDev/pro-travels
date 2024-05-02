import { LuSearch } from "react-icons/lu";
const Search = () => {
  return (
    <div className="flex items-center border rounded-lg pr-4">
      <input
        type="text"
        placeholder="Search Here"
        className="w-[400px] bg-transparent py-2 px-4 outline-none text-neutral-500 placeholder:font-light placeholder:text-neutral-400"
      />
      <button>
        <LuSearch className="text-neutral-500" />
      </button>
    </div>
  );
};

export default Search;
