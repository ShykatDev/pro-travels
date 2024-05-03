import PackageDetailsReload from "@/components/details/PackageDetailsReload";

const page = ({ params }) => {
  return (
    <div>
      <PackageDetailsReload params={params} />
    </div>
  );
};

export default page;
