import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "../Services/Service";

const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div>
      <div className="relative bg-purple-400">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h1 className="mb-6 lg:text-3xl tracking-tight text-rose-700 text-3xl text-center sm:leading-none">
              Help Those People Who are in Needed...
            </h1>

            <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                placeholder="Search"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              />
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-lg md:w-auto hover:text-white bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
              >
                Search
              </a>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-purple-400">
        <div className="grid gap-10 row-gap-10 mb-8 lg:grid-cols-3 sm:row-gap-6 grid-cols-1 pt-10 lg:mx-20 mx-7 pb-10">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
