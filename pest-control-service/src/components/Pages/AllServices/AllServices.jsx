import Lottie from "lottie-react";
import Loading from "../../../assets/loading.json";
import useServicesArea from "../../../hooks/useServicesArea";
import AllServicesCard from "./AllServicesCard";
import { Button } from "flowbite-react";
import { useState } from "react";

const AllServices = () => {
  const [serviceTerm, setServiceName] = useState("");
  const handleSearch = (e) => {
    setServiceName(e.target.value);
  };
  const { data, isLoading, isFetching } = useServicesArea();
  console.log(data, isLoading, isFetching);

  if (isLoading === true) {
    return (
      <div>
        <Lottie animationData={Loading}></Lottie>
      </div>
    );
  }
  const filteredName = data.filter((service) =>
    service.serviceName.toLowerCase().includes(serviceTerm.toLocaleLowerCase())
  );

  return (
    <div className="mx-auto flex justify-center items-center flex-col gap-5">
      <h2 className="text-5xl text-center font-bold my-10">All Services </h2>
      <input
        type="text"
        value={serviceTerm}
        onChange={handleSearch}
        placeholder="Service Name"
        className="border p-2 rounded"
      />

      {filteredName.map((allservice) => {
        return (
          <AllServicesCard
            key={allservice._id}
            allservice={allservice}
          ></AllServicesCard>
        );
      })}
      <Button color="success">Show More</Button>
    </div>
  );
};

export default AllServices;
