import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <Link to="/">
            <div className="flex items-center justify-evenly">
              <img
                className="h-[50px] w-[50px]"
                src="https://i.ibb.co/MBt7ntK/c02a0527874bb2d01be8ea75f1346c51.jpg"
                alt=""
              />

              <h2 className="text-white font-extrabold text-2xl ml-3">
                Pest <span className="text-green-500">Control</span>
              </h2>
            </div>
          </Link>
          <div
            id="navbar-image-and-text-1"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              <a
                className="font-medium text-blue-500"
                href="#"
                aria-current="page"
              >
                Landing
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Account
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Work
              </a>
              <a
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Blog
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;