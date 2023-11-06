const Artical = () => {
  return (
    <div>
      <h2 className=" text-green-700 font-bold  underline text-center mt-10 mb-5">
        Revolutionizing Pest Management <br />
      </h2>
      <p className="font-bold text-5xl text-center mb-10">
        Eco-Friendly Solutions <br /> for a Pest-Free Community
      </p>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="https://i.ibb.co/qDyDPQG/cdc-w-Co9-Uw-ZEa18-unsplash.jpg"
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                A New Standard in Pest Management
              </a>
              <p className="text-xs dark:text-gray-400">
                By
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline ml-3"
                >
                  Leroy Jenkins
                </a>
              </p>
            </div>
            <div className="dark:text-gray-100">
              <p>
                Pest Control, a recent addition to the industry, is swiftly
                gaining recognition for its exceptional service and commitment
                to community well-being. Their seasoned team of technicians
                employs innovative, eco-friendly methods, ensuring tailored
                solutions for every pest issue. The companys dedication to
                environmental responsibility sets them apart, utilizing only
                safe, eco-conscious products. Clients applaud their prompt
                response times, thorough inspections, and effective results.
                Beyond their technical prowess, Pest Control actively engages in
                community outreach, offering educational resources on pest
                prevention. With transparent pricing and open communication,
                Pest Control establishes trust and reliability. Experience a new
                era in pest management with Pest Control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artical;
