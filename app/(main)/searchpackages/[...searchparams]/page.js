import SearchPackages from "@/components/packages/SearchPackages";

const page = ({ params }) => {
  return (
    <div className="container">
      <SearchPackages params={params} />
    </div>
  );
};

export default page;
