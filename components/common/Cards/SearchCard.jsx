import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";

const SearchCard = ({ place }) => {
  return (
    <Link
      href={`/packages/${place.id}`}
      className="flex gap-2 p-3 rounded-lg bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-5 backdrop-blur-sm"
    >
      <Image
        src={place.thumbnail}
        alt={place.placeName}
        width={50}
        height={50}
        className="rounded-md"
      />

      <div>
        <h2 className="line-clamp-1">{place.placeName}</h2>
        <p className="text-brandText">${place.price}</p>
      </div>
    </Link>
  );
};

export default SearchCard;
