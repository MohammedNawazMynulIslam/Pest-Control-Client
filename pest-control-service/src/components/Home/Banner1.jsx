const Banner1 = () => {
  return (
    <div className="relative  h-screen mt-28">
      <div
        className="absolute inset-0 flex items-center bg-fixed"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/zGRt9Xn/Ecosan-Pest-control-exterior-ants-01.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 text-center  text-white flex items-center h-full">
        <div className="mx-auto p-8">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight">
            Take your service from <br />
            <span className="text-green-600">Pest Control</span>
          </h1>
          <p className="mt-3 text-lg">
            Introducing our premier pest control company, dedicated to
            safeguarding your home or business from unwanted intruders.
            <br /> With years of expertise and a commitment to excellence, we
            have become a trusted name in pest management services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
