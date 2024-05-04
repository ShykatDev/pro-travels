import Modal from "@/components/common/Modal";
import PackageDetails from "@/components/details/PackageDetails";

const PackageModal = ({ params }) => {
  return (
    <Modal>
      <PackageDetails params={params} />
    </Modal>
  );
};

export default PackageModal;
