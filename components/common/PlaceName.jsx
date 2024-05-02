import { FaLocationDot } from "react-icons/fa6";

const PlaceName = ({ place, price }) => {
  return (
    <div className="absolute bottom-3 right-3 px-3 border text-neutral-300 py-1 bg-black bg-opacity-50 rounded-md backdrop-blur-sm">
      <p className="flex items-center text-sm gap-1">
        <FaLocationDot /> {place}
      </p>
      <p className="text-sm">
        Starts with{" "}
        <span className="font-medium text-brand dark:text-brandText">
          ${price}
        </span>
      </p>
    </div>
  );
};

export default PlaceName;
