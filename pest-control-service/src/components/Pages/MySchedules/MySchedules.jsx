import Lottie from "lottie-react";
import Loading from "../../../assets/loading.json";
import useBooking from "../../../hooks/useBooking";
import MySchedulesCard from "./MySchedulesCard";

const MySchedules = () => {
  const { data, isLoading, isFetching } = useBooking();
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
    <div>
      <h2 className="text-green-700 font-bold text-5xl underline text-center my-10">
        My Schedules
      </h2>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {data.map((schedules) => (
            <MySchedulesCard
              key={schedules._id}
              schedules={schedules}
            ></MySchedulesCard>
          ))}
        </div>
      ) : (
        <p>No services booked yet</p>
      )}
    </div>
  );
};

export default MySchedules;
