import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";

const ManageServiceCard = ({ service, refetch }) => {
  const { user } = useContext(AuthContext);
  const currentUser = user.email;

  const {
    _id,
    photo,
    serviceName,
    yourName,
    email,
    price,
    serviceArea,
    description,
    providerImage,
  } = service;
  const Email = email;
  const isCurrentUser = currentUser === Email;
  console.log(isCurrentUser);
  // console.log("Email", Email);
  if (!isCurrentUser) {
    return null;
  }

  // handle delete
  const handleDelete = () => {
    console.log(_id);
    axios.delete(`http://localhost:3000/addServices/${_id}`).then((res) => {
      if (res?.data?.deletedCount > 0) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((res) => {
          if (res.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <div>
        {/* card */}

        <div className="w-full p-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={photo}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {serviceName}
            </h5>
            <p className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {yourName}
            </p>
            <p className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {email}
            </p>
            <p className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {price}
            </p>
            <p className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {serviceArea}
            </p>
            <p className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {description}
            </p>
            <img className="w-24 h-24 mb-3  shadow-lg" src={providerImage} />
            <div className="flex mt-4 space-x-3 md:mt-6">
              <Link
                to={`/editService/${_id}`}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit
              </Link>
              <Link
                onClick={handleDelete}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServiceCard;
