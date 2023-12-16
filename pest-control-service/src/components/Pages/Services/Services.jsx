import Lottie from "lottie-react";
import Loading from "../../../assets/loading.json";

import useServices from "../../../hooks/useServices";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const { data, isLoading, isFetching } = useServices();
  console.log(data, isLoading, isFetching);
  console.log(typeof data);
  if (isLoading === true) {
    return (
      <div>
        <Lottie animationData={Loading}></Lottie>
      </div>
    );
  }
  return (
    <div className="mt-16">
      <h1 className="text-green-700 font-bold  underline text-center">
        Popular Services
      </h1>
      <p className="font-bold text-5xl text-center mb-11">
        Eliminate Unwanted Pests
      </p>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {data.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
