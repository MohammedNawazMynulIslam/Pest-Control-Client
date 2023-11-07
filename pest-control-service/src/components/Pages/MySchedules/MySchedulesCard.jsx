const MySchedulesCard = ({ schedules }) => {
  console.log(Object.keys(schedules).join(","));
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
      <div className=" w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
        </div>
      </div>
    </div>
  );
};

export default MySchedulesCard;
