import Booking from "@/components/booking/Booking";
import ProtectedRoute from "@/components/common/ProtectedRoutes";

const page = () => {
  return (
    <div className="container">
      <ProtectedRoute>
        <Booking />
      </ProtectedRoute>
    </div>
  );
};

export default page;
