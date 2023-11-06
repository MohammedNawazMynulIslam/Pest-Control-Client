import useSingleService from "../../../hooks/useSingleService";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import Loading from "../../../assets/loading.json";
import { useParams } from "react-router-dom";
import { Card } from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import BookingModal from "../../Modal/BookingModal";

const SingleService = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useSingleService({ _id: id });
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(data);
  console.log(data, isLoading, isFetching);

  const handleBookNow = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handlePurchase = (bookingData) => {
    axios.post("http://localhost:3000/bookings", bookingData).then(
      ((res) => {
        Swal.fire({
          icon: "success",
          title: `${serviceName} booked successfully`,
          text: "Thank you for booking this service!",
        });
      }).catch((err) => {
        console.error("Error booking service:", err);
        Swal.fire({
          icon: "error",
          title: "Booking Failed",
          text: "An error occurred while booking the service. Please try again later.",
        });
      })
    );
  };

  if (isLoading === true) {
    return (
      <div>
        <Lottie animationData={Loading}></Lottie>
      </div>
    );
  }

  if (!data) {
    return null;
  }
  console.log(Object.keys(data).join(","));
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    providerImage,
    providerName,
    servicePrice,
    serviceArea,
    providerEmail,
    userEmail,
  } = data;

  // const handleBookNow = () => {
  //   setIsModalOpen(true);
  // };

  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  // };
  // const handlePurchase = (bookingData) => {
  //   axios.post("http://localhost:3000/bookings", bookingData).then(
  //     ((res) => {
  //       Swal.fire({
  //         icon: "success",
  //         title: `${serviceName} booked successfully`,
  //         text: "Thank you for booking this service!",
  //       });
  //     }).catch((err) => {
  //       console.error("Error booking service:", err);
  //       Swal.fire({
  //         icon: "error",
  //         title: "Booking Failed",
  //         text: "An error occurred while booking the service. Please try again later.",
  //       });
  //     })
  //   );
  // };

  return (
    <div>
      <h1>Single Servic {serviceArea}</h1>
      <p>{servicePrice}</p>
      <Card
        className="max-w-sm "
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc={providerImage}
      >
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {providerName}
          </h5>
        </a>
        <p className="dark:text-white">{serviceArea}</p>
        <div className="mb-5 mt-2.5 flex items-center">
          <img src={serviceImage} alt="" />
        </div>
        <p className="dark:text-white">{serviceName}</p>
        <p className="dark:text-white">{serviceDescription}</p>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {servicePrice}
          </span>

          <div className="text-center">
            <button
              onClick={handleBookNow}
              type="button"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              data-hs-overlay="#hs-subscription-with-image"
            >
              Book Now
            </button>
          </div>
        </div>
      </Card>
      {/* <button onClick={handleBookNow}>Book Now</button> */}
      {isModalOpen && (
        <BookingModal
          serviceName={serviceName}
          serviceImage={serviceImage}
          serviceProviderEmail={providerEmail}
          userEmail={userEmail}
          onPurchase={handlePurchase}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};
export default SingleService;
