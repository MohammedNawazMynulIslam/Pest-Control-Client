import { Carousel } from "flowbite-react";
const Banner = () => {
  return (
    <div>
      <h2 className="text-center">
        <small className="text-green-700 font-bold  underline">
          {" "}
          WHO WE ARE
        </small>
      </h2>
      <p className="font-bold text-4xl text-center my-9">
        The Trusted Authority in Pest <br /> Control
      </p>
      <div className=" grid h-56 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            className="h-[400px]"
            src="https://i.ibb.co/HzfJVs6/Commercial-and-Residential-Pest-control-UT-hybridpestcontrol-scaled.jpg"
            alt="..."
          />
          <img
            className="h-[400px]"
            src="https://i.ibb.co/zfx18M5/technician-with-logo-small-2.webp"
            alt="..."
          />
          <img
            className="h-[400px]"
            src="https://i.ibb.co/R4N2GQc/istockphoto-1155017331-640x640.jpg"
            alt="..."
          />
          <img src="https://i.ibb.co/C9TrP9d/download.jpg" alt="..." />
          <img
            className="h-[400px]"
            src="https://i.ibb.co/TM7cFkD/pest-control-service-with-exterminator-of-insects-sprays-and-house-hygiene-disinfection-in-flat-cart.jpg"
            alt="..."
          />
        </Carousel>
        <Carousel indicators={false}>
          <img
            className="h-[400px]"
            src="https://i.ibb.co/HzfJVs6/Commercial-and-Residential-Pest-control-UT-hybridpestcontrol-scaled.jpg"
            alt="..."
          />
          <img
            className="h-[400px]"
            src="https://i.ibb.co/zfx18M5/technician-with-logo-small-2.webp"
            alt="..."
          />
          <img
            className="h-[400px]"
            src="https://i.ibb.co/R4N2GQc/istockphoto-1155017331-640x640.jpg"
            alt="..."
          />
          <img
            className="h-[400px]"
            src="https://i.ibb.co/C9TrP9d/download.jpg"
            alt="..."
          />
          <img
            className="h-[400px]"
            src="https://i.ibb.co/TM7cFkD/pest-control-service-with-exterminator-of-insects-sprays-and-house-hygiene-disinfection-in-flat-cart.jpg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
