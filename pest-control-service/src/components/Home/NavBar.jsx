import { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Switch, useDarkreader } from "react-darkreader";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, { toggle }] = useDarkreader(false);
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  // logout function
  const handleLogOut = () => {
    logOut().then((result) => {
      console.log(result);
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* new nav */}
      <nav className="p-5 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 flex justify-between items-center flex-wrap sm:justify-center">
        <NavLink to="/" className="flex items-center">
          {
            <div>
              <img
                className="w-[70px] mr-4"
                src="https://i.ibb.co/dG4z3W0/pest-logo.png"
              />
              {/* <h2 className="text-xl md:text-2xl text-white lg:text-5xl font-bold ">
                Pest
                <span className="text-green-400">Control</span>
              </h2> */}
            </div>
          }
        </NavLink>
        <div>
          <div className="sm:hidden flex flex-row">
            <button
              onClick={toggleMenu}
              type="button"
              className="sm:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } sm:flex flex-row sm:items-center sm:ml-4`}
          >
            <NavLink
              exact="true"
              to="/"
              className={`ml-4 font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 ${
                location.pathname === "/" ? "underline " : ""
              }`}
            >
              Home
            </NavLink>
            <NavLink
              to="/allServices"
              className={`ml-4 font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 ${
                location.pathname === "/services" ? "underline " : ""
              }`}
            >
              Services
            </NavLink>
            {user ? (
              <>
                {/* drop down dashboard */}
                <NavLink
                  className={`ml-4 font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 ${
                    location.pathname === "/dashboard" ? "underline " : ""
                  }`}
                >
                  <div className="hs-dropdown relative inline-flex [--trigger:hover]">
                    <button
                      id="hs-dropdown-hover-event"
                      type="button"
                      className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 "
                    >
                      Dashboard
                      <svg
                        className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>

                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:left-0 after:w-full before:h-4 before:absolute before:-top-4 before:left-0 before:w-full"
                      aria-labelledby="hs-dropdown-hover-event"
                    >
                      <NavLink
                        to="/manageService"
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        My-services
                      </NavLink>
                      <NavLink
                        to="/addService"
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        Add-services
                      </NavLink>
                      <NavLink
                        to={"/mySchedules"}
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        My-schedules
                      </NavLink>
                    </div>
                  </div>
                </NavLink>
                <button
                  onClick={handleLogOut}
                  className="btn btn-accent mr-5 font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className={`ml-4 font-medium mr-3 text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 ${
                  location.pathname === "/login" ? "underline " : ""
                }`}
              >
                Login
              </NavLink>
            )}
            <Switch checked={isDark} onChange={toggle} styling="github" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
