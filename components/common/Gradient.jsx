const Gradient = ({ positionX, positionY, color }) => {
  return (
    <div
      className={`size-[800px] rounded-full absolute -z-40 blur-3xl bg-opacity-10 ${positionX} ${positionY} ${color}`}
    ></div>
  );
};

export default Gradient;
