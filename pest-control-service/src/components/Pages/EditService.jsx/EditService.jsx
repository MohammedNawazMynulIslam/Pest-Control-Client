import axios from "axios";
import Lottie from "lottie-react";
import Loading from "../../../assets/loading.json";

import Swal from "sweetalert2";
import useUpdateService from "../../../hooks/useUpdateService";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const EditService = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useUpdateService({ _id: id });
  console.log(data, isLoading, isFetching);
  if (isLoading === true) {
    return (
      <div>
        <Lottie animationData={Loading}></Lottie>
      </div>
    );
  }
  console.log(Object.keys(data).join(","));
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
  } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("update");
    const form = e.target;

    const service = {
      photo: form.serviceUrl.value,
      serviceName: form.serviceName.value,
      yourName: form.yourName.value,
      email: form.email.value,
      price: form.price.value,
      serviceArea: form.serviceArea.value,
      description: form.description.value,
      providerImage: form.providerUrl.value,
    };
    console.log(service);
    axios
      .put(`http://localhost:3000/addServices/${_id}`, service)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          icon: "success",
          title: "Successfully Updated!",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: `${error}`,
          text: "There was an error adding the service.",
        });
      });
  };
  return (
    <>
      <Helmet>
        <title>Pest Control | Edit Service</title>
      </Helmet>
      <div>
        <h2 className="text-green-700 font-bold  text-5xl underline text-center my-10">
          Edit Service{" "}
        </h2>
        {/* form */}
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form
                  onSubmit={handleUpdate}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  {/* photo service */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Service Picture
                    </label>
                    <input
                      type="url"
                      name="serviceUrl"
                      id="url"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="service url"
                      defaultValue={photo}
                      required=""
                    />
                  </div>
                  {/* service name */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Service Name
                    </label>
                    <input
                      type="name"
                      name="serviceName"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="service name"
                      defaultValue={serviceName}
                      required=""
                    />
                  </div>
                  {/* your name for firebase */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="name"
                      name="yourName"
                      id="name"
                      // value={userName}
                      placeholder="Your Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      defaultValue={yourName}
                    />
                  </div>
                  {/* email */}
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      // value={userEmail}
                      defaultValue={email}
                      id="email"
                      placeholder="Your Email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  {/*price*/}
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price
                    </label>
                    <input
                      type="price"
                      name="price"
                      id="price"
                      placeholder="Price"
                      defaultValue={price}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  {/* service area */}
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Service area
                    </label>
                    <input
                      type="text"
                      name="serviceArea"
                      id="text"
                      placeholder="Service area"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      defaultValue={serviceArea}
                    />
                  </div>
                  {/* description */}
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      id="text"
                      placeholder="Description"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      defaultValue={description}
                    />
                  </div>
                  {/* provider image */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Provider Image
                    </label>
                    <input
                      type="url"
                      name="providerUrl"
                      // value={photoUrl}
                      defaultValue={providerImage}
                      id="url"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="service url"
                      required=""
                    />
                  </div>

                  {/* add btn */}
                  <button
                    type="submit"
                    className="w-full text-white dark:bg-violet-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditService;
