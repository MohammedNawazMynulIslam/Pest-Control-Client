import { Link } from "react-router-dom";
const ServicesCard = ({ service }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    providerImage,
    providerName,
    servicePrice,
  } = service || {};

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 m-4">
        <img
          src={serviceImage}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">
              {serviceName}
            </h2>
            <p className="dark:text-gray-100">{serviceDescription}</p>
          </div>
          <img
            src={providerImage}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <h2 className="text-3xl font-semibold tracking-tight">
            {providerName}
          </h2>
          <p className="dark:text-gray-100">{servicePrice}</p>
          <Link>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-tight rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
