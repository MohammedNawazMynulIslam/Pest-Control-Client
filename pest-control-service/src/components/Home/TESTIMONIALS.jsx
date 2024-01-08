import { motion } from "framer-motion";
const TESTIMONIALS = () => {
  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
      <div>
        <h2 className=" text-green-700 font-bold  underline text-center mt-10">
          TESTIMONIALS
        </h2>
        <p className="font-bold text-5xl text-center mb-10">
          WHAT OUR CLIENT SAYS
        </p>
        <div className="grid border rounded-xl shadow-sm divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x dark:border-gray-700 dark:shadow-slate-700/[.7] dark:divide-gray-600">
          <div className="flex flex-col flex-[1_0_0%] bg-white dark:bg-gray-800">
            <img
              className="w-full h-auto rounded-t-xl sm:rounded-tr-none"
              src="https://i.ibb.co/5rHPqz0/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg"
              alt="Image Description"
            />
            <div className="p-4 flex-1 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Highly Effective and Eco-Friendly!
              </h3>
              <p className="mt-1 text-gray-800 dark:text-gray-400">
                Impressed with Pest Control! They promptly addressed my ant
                problem using eco-friendly products. Professional and effective
                service.
              </p>
            </div>
            <div className="p-4 border-t sm:px-5 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Last updated 5 mins ago
              </p>
            </div>
          </div>

          <div className="flex flex-col flex-[1_0_0%] bg-white dark:bg-gray-800">
            <img
              className="w-full h-auto"
              src="https://i.ibb.co/5rHPqz0/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg"
              alt="Image Description"
            />
            <div className="p-4 flex-1 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Swift and Thorough Roach Removal!
              </h3>
              <p className="mt-1 text-gray-800 dark:text-gray-400">
                Pest Solutions swiftly eliminated our roach infestation.
                Knowledgeable technician, safe treatments. Havent seen a roach
                since!
              </p>
            </div>
            <div className="p-4 border-t sm:px-5 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Last updated 35 mins ago
              </p>
            </div>
          </div>

          <div className="flex flex-col flex-[1_0_0%] bg-white dark:bg-gray-800">
            <img
              className="w-full h-auto sm:rounded-tr-xl"
              src="https://i.ibb.co/5rHPqz0/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg"
              alt="Image Description "
            />
            <div className="p-4 flex-1 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Expert Mouse Control, A++!
              </h3>
              <p className="mt-1 text-gray-800 dark:text-gray-400">
                Pest Control Management was excellent in resolving our mouse
                issue. Professional, tailored treatment, and complete
                eradication. Highly recommend!
              </p>
            </div>
            <div className="p-4 border-t sm:px-5 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Last updated 45 mins ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TESTIMONIALS;
