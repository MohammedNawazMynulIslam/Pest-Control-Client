import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Error from "../../assets/404.json";

import { useTypewriter } from "react-simple-typewriter";
const ErrorPage = () => {
  const [text] = useTypewriter({
    words: ["Something Is Wrong", "Go Back To Home"],
    loop: 10,
  });

  return (
    <>
      <div className="App text-center my-14 font-extrabold text-7xl">
        <span className="text-green-500">{text}</span>
      </div>
      <div>
        <Lottie className="h-[300px] my-24" animationData={Error} />
      </div>
      <div>
        <Link className="flex justify-center items-center" to="/">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Go Home
          </button>
        </Link>
      </div>
    </>
  );
};
export default ErrorPage;
