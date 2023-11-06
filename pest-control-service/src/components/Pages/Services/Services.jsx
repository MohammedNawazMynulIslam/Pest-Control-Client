import Lottie from "lottie-react";
import Loading from "../../../assets/loading.json";

import useServices from "../../../hooks/useServices";
import ServicesCard from "./ServicesCard";
const Services = () => {
  const { data, isLoading, isFetching } = useServices();
  console.log(data, isLoading, isFetching);
  if (isLoading === true) {
    return (
      <div>
        <Lottie animationData={Loading}></Lottie>
      </div>
    );
  }
  return (
    <div className="mt-16">
      <h1 className="text-center text-green-800">Popular Services</h1>
      <p className="font-bold text-5xl text-center mb-11">
        Eliminate Unwanted Pests
      </p>

      {data.map((service) => (
        <ServicesCard key={service._id} service={service}></ServicesCard>
      ))}
    </div>
  );
};

export default Services;
