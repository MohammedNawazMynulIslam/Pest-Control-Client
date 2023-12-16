import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import Loading from "../../../assets/loading.json";
import useServicesArea from "../../../hooks/useServicesArea";
import AllServicesCard from "./AllServicesCard";
import { Button } from "flowbite-react";
import { useState } from "react";

const AllServices = () => {
  const [serviceTerm, setServiceName] = useState("");
  const [showMore, setShowMore] = useState(6);

  //   filter func
  const handleSearch = (e) => {
    setServiceName(e.target.value);
  };
  //   show more func
  const handleShowMore = () => {
    setShowMore(showMore + 6);
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
    <>
      <Helmet>
        <title>Pest Control | All Services</title>
      </Helmet>
      <div className="mx-auto flex justify-center items-center flex-col gap-5">
        <h2 className=" text-green-700 font-bold  text-5xl underline text-center mt-10">
          All Services
        </h2>
        <input
          type="text"
          value={serviceTerm}
          onChange={handleSearch}
          placeholder="Service Name"
          className="border p-2 rounded"
        />

        {filteredName.slice(0, showMore).map((allservice) => {
          return (
            <AllServicesCard
              key={allservice._id}
              allservice={allservice}
            ></AllServicesCard>
          );
        })}
        {showMore < filteredName.length && (
          <Button onClick={handleShowMore} color="success">
            Show More
          </Button>
        )}
      </div>
    </>
  );
};

export default AllServices;
