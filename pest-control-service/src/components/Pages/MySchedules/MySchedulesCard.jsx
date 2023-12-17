import { useState } from "react";
import axios from "axios";

const MySchedulesCard = ({ schedules }) => {
  const [selectedStatus, setSelectedStatus] = useState(schedules.status);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    updateStatusInDatabase(schedules._id, newStatus);
  };
  const updateStatusInDatabase = async (serviceId, newStatus) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/booking/${serviceId}/status`,
        {
          status: newStatus,
        }
      );
      if (res.data.success) {
        console.log("Status updated successfully!");
      } else {
        console.error("Error updating status:", res.data.message);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const {
    _id,
    serviceName,
    serviceImage,
    serviceProviderEmail,
    userEmail,
    takingDate,
    servicePrice,
    specialInstruction,
  } = schedules;
  return (
    <div>
      <div className=" w-[300px] h-[650px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-contents h-fit"
            src={serviceImage}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {serviceName}
            </h5>
          </a>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {serviceProviderEmail}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {userEmail}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {takingDate}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {servicePrice}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {specialInstruction}
          </p>
          <div className="mb-3">
            <label
              htmlFor="status"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {" "}
              Status
            </label>
            <select
              id="status"
              value={selectedStatus}
              onChange={handleStatusChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MySchedulesCard;
