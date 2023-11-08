import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import anime2 from "../../../assets/login.json";
import { useContext } from "react";

import { AuthContext } from "../../../AuthProvider/AuthProvider";

const LogIn = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      console.log(result.user);
      notifySuccess("Login Successfully");
    });

    fetch("http://localhost:3000/jwt", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      // console.log(result.email);
      const googleEmail = result.email;
      console.log(googleEmail);
      navigate(location?.state ? location.state : "/");
      notifySuccess("Login Successfully");
    });
    fetch("http://localhost:3000/google-jwt", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ googleEmail: googleSignIn }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))

      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error signing in with Google!",
        });
      });
  };

  const notifySuccess = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: message,
    });
  };
  //

  return (
    <div className=" container mx-auto flex  flex-col lg:flex-row md:flex-col  justify-center items-center ">
      <div className="">
        <Lottie animationData={anime2}></Lottie>
      </div>
      <div className="container mx-auto mt-28 w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center dark:text-gray-400">
          Dont have account?
          <Link to="/signIn">Sign up here</Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            onClick={handleGoogleSignIn}
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
          onSubmit={handleLogin}
          noValidate=""
          action=""
          className="space-y-8"
        >
          <div className="space-y-4">
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
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            Sign in
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LogIn;
