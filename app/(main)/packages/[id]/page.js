import PackageDetails from "@/components/details/PackageDetails";

const page = ({ params }) => {
  return (
    <div>
      <PackageDetails params={params} />
    </div>
  );
};

export default page;
