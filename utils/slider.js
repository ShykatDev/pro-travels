import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export function SampleNextArrow(props) {
  const { style, onClick, place } = props;
  return (
    <FaArrowRightLong
      className={`absolute rounded-md ${place} text-neutral-500 size-10 p-3 rounded duration-300 border border-neutral-300`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props) {
  const { style, onClick, place } = props;
  return (
    <FaArrowLeftLong
      className={`absolute rounded-md ${place} text-neutral-500 size-10 p-3 rounded duration-300 border border-neutral-300`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
