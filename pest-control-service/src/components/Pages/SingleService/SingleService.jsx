import useSingleService from "../../../hooks/useSingleService";
import Lottie from "lottie-react";
import Loading from "../../../assets/loading.json";
import { useParams } from "react-router-dom";
import { Card } from "flowbite-react";

const SingleService = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useSingleService({ _id: id });
  console.log(data);
  console.log(data, isLoading, isFetching);

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
  // console.log(Object.keys(data).join(","));
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    providerImage,
    providerName,
    servicePrice,
    serviceArea,
  } = data;

  return (
    <div>
      <h1>Single Servic {serviceArea}</h1>
      <p>{servicePrice}</p>
      <Card
        className="max-w-sm"
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc={providerImage}
      >
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {providerName}
          </h5>
        </a>
        <p>{serviceArea}</p>
        <div className="mb-5 mt-2.5 flex items-center">
          <img src={serviceImage} alt="" />
        </div>
        <p>{serviceName}</p>
        <p>{serviceDescription}</p>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {servicePrice}
          </span>
          <a
            href="#"
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Book Now
          </a>
        </div>
      </Card>
    </div>
  );
};

export default SingleService;
