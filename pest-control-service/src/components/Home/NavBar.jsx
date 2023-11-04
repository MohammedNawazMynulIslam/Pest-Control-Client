import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <div className="flex items-center">
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } sm:flex sm:items-center sm:ml-4 `}
            >
              <Link to="/" className="font-medium text-blue-500">
                Home
              </Link>
              <Link
                to="/services"
                className="ml-4 font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                Services
              </Link>
              {isLoggedIn ? (
                <>
                  <Link
                    to="/dashboard"
                    className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                  >
                    Dashboard
                  </Link>
                  <a
                    // onClick={() => setIsLoggedIn(false)}
                    className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                    href="#"
                  >
                    Logout
                  </a>
                </>
              ) : (
                <Link
                  to="/login"
                  className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 ml-4"
                >
                  Log in
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
