import useManageService from "../../../hooks/useManageService";
import Loading from "../../../assets/loading.json";
import Lottie from "lottie-react";
import ManageServiceCard from "./ManageServiceCard";
import { Helmet } from "react-helmet";

const ManageService = () => {
  const { data, isLoading, isFetching, refetch } = useManageService();
  console.log(data, isLoading, isFetching, refetch);
  console.log(typeof data);

  if (isLoading === true) {
    return (
      <div>
        <Lottie animationData={Loading}></Lottie>
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>Pest Control | Manage Service</title>
      </Helmet>
      <div>
        <h2 className=" text-green-700 font-bold  text-5xl underline text-center mt-10">
          Manage Service
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-10 ">
          {data.map((service) => (
            <ManageServiceCard
              key={service._id}
              service={service}
              refetch={refetch}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageService;
