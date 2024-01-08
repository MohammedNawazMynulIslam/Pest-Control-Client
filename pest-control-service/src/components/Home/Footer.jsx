const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col lg:flex-row justify-center items-center mt-auto w-full max-w-[80rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto ">
        <div>
          <img
            className="w-[70px] mr-4"
            src="https://i.ibb.co/dG4z3W0/pest-logo.png"
          />
        </div>
        <div className="text-center">
          <div className="mt-3">
            <p className="text-gray-500">
              We are part of the{" "}
              <a
                className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
                href="#"
              >
                Pest Control
              </a>{" "}
              family.
            </p>
            <p className="text-gray-500">
              © Pest Control 2023 . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
