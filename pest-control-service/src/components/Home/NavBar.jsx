import { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const handleLogOut = () => {
    logOut().then((result) => {
      console.log(result);
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDashboardMenu = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  return (
    <div>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <NavLink to="/">{/* ... */}</NavLink>
          <div className="flex items-center">
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {/* ... */}
              </button>
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } sm:flex sm:items-center sm:ml-4`}
            >
              <NavLink
                exact
                to="/"
                className={`ml-4 font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 ${
                  location.pathname === "/" ? "underline " : ""
                }`}
              >
                Home
              </NavLink>
              <NavLink
                className={`ml-4 font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 ${
                  location.pathname === "/services" ? "underline " : ""
                }`}
              >
                Services
              </NavLink>
              {user ? (
                <>
                  <div
                    className="relative"
                    onMouseEnter={toggleDashboardMenu}
                    onMouseLeave={toggleDashboardMenu}
                  >
                    <NavLink
                      to="/dashboard"
                      className={`ml-4 font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 ${
                        location.pathname === "/dashboard" ? "underline " : ""
                      }`}
                    >
                      Dashboard
                    </NavLink>
                    {isDashboardOpen && (
                      <div className="absolute mt-2 py-2 w-48 bg-white border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        <NavLink
                          to="/dashboard/my-services"
                          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          My Services
                        </NavLink>
                        <NavLink
                          to="/dashboard/add-services"
                          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Add Services
                        </NavLink>
                        <NavLink
                          to="/dashboard/my-schedules"
                          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          My Schedules
                        </NavLink>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-accent ml-4 font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  to="/login"
                  className={`ml-4 font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 ${
                    location.pathname === "/login" ? "underline " : ""
                  }`}
                >
                  Log in
                </NavLink>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
