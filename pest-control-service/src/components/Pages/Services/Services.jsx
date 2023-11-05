import Lottie from "lottie-react";
import Loading from "../../../assets/loading.json";

import useServices from "../../../hooks/useServices";
import ServicesCard from "./ServicesCard";
const Services = () => {
  // const { data, isLoading ,isFetching} = useQuery({
  //   queryKey: ["services"],
  //   queryFn: async () => {
  //     const data = await fetch("http://localhost:3000/services");
  //     return await data.json();
  //   },
  // });
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
    <div>
      <h1 className="text-center text-green-800">Popular Services</h1>
      <p className="font-bold text-5xl text-center">Eliminate Unwanted Pests</p>
      {<p>services{data.length}</p>}
      {data.map((service) => (
        <ServicesCard key={service._id} service={service}></ServicesCard>
      ))}
    </div>
  );
};

export default Services;
