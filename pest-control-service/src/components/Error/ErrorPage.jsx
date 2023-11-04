import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="container mx-auto mt-44">
        <h2 className="text-5xl font-extrabold text-white b-4 w-1/4">
          SOMETHING IS WRONG
        </h2>

        <p className="font-extrabold text-8xl text-white my-8">404 Not Found</p>

        <Link to="/">
          {" "}
          <button className="btn btn-error text-white">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
