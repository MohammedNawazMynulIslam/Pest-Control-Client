import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "lottie-react";
import anime from "../../../assets/signUp.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-center",
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: "top-center",
    });
  };

  // signUp function
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const url = form.url.value;
    console.log(name, password, email, url);

    // password verification
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    if (!passwordCheck.test(password)) {
      notifyError(
        "Password must be at least 6 characters long, contain at least one capital letter, and one special character."
      );
      return;
    }

    // user created
    createUser(email, password)
      .then((result) => {
        console.log(result);
        notifySuccess("Account created successfully");
      })
      .catch((error) => {
        console.log(error);
        notifyError("Failed to create account . Please try again");
      });
  };
  const ShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex  justify-center items-center p-5">
      <div className="">
        <Lottie animationData={anime}></Lottie>
      </div>
      <div className="container mx-auto mt-28 w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100 ">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Create a new account
        </h2>
        <p className="text-sm text-center dark:text-gray-400">
          Already have account?
          <Link
            to="/login"
            href="#"
            rel="noopener noreferrer"
            className="focus:underline hover:underline"
          >
            Login here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400"></hr>
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400"></hr>
        </div>
        <form
          onSubmit={handleSignUp}
          noValidate=""
          action=""
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="User Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 "
                required
              />
              <div className="ml-80">
                {showPassword ? (
                  <FaEyeSlash onClick={ShowPassword} />
                ) : (
                  <FaEye onClick={ShowPassword} />
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Photo URL
              </label>
              <input
                type="url"
                name="url"
                id="url"
                placeholder="Photo URL"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            Sign Up
          </button>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignUp;
