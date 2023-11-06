import Lottie from "lottie-react";
import Loading from "../../../assets/loading.json";
import useServicesArea from "../../../hooks/useServicesArea";
import AllServicesCard from "./AllServicesCard";
const AllServices = () => {
  const { data, isLoading, isFetching } = useServicesArea();
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
      <h2>All service with area</h2>
      {data.map((allservice) => {
        <AllServicesCard
          key={allservice._id}
          allservice={allservice}
        ></AllServicesCard>;
      })}
    </div>
  );
};

export default AllServices;
