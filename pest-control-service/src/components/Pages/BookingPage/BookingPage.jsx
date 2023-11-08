import BookingModal from "../../Modal/BookingModal";
import { useLocation } from "react-router-dom";

const BookingPage = () => {
  const location = useLocation();
  const {
    serviceName,
    serviceImage,
    serviceProviderEmail,
    userEmail,
    servicePrice,
    onPurchase,
    onClose,
  } = location.state;

  return (
    <div>
      <BookingModal
        serviceName={serviceName}
        serviceImage={serviceImage}
        serviceProviderEmail={serviceProviderEmail}
        userEmail={userEmail}
        servicePrice={servicePrice}
        onPurchase={onPurchase}
        onClose={onClose}
      />
    </div>
  );
};

export default BookingPage;
