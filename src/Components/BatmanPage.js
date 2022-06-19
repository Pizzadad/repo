import React from "react";

const BatmanPage = () => {
  return (
    <section className="overflow-hidden text-gray-700">
      <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32 space-y-3">
        <div className="flex justify-center">
          <p className="font-lobster text-center text-3xl md:text-5xl">Batman gallery</p>
        </div>

        <div className="md:flex md:flex-wrap hidden -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://drive.google.com/uc?export=view&id=1D7qinNKXMYeQ1h-6YkfZIhhYpw9HdX2Z"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://drive.google.com/uc?export=view&id=1bFCSo8tMnJZVTU2uAUyL6WKhJyzSmArB"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://drive.google.com/uc?export=view&id=1mxu4tYxR_2b9tfQmf1cYBql4jxazFsOJ"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://drive.google.com/uc?export=view&id=1-HkeAFhqQYpGXDUxjGNvOi0kZlzV7HXF"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:hidden -m-1 md:-m-2">
          <div className="flex flex-wrap sm:w-1/2 w-full">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://drive.google.com/uc?export=view&id=1D7qinNKXMYeQ1h-6YkfZIhhYpw9HdX2Z"
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:w-1/2 w-full">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://drive.google.com/uc?export=view&id=1bFCSo8tMnJZVTU2uAUyL6WKhJyzSmArB"
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:w-1/2 w-full">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://drive.google.com/uc?export=view&id=1mxu4tYxR_2b9tfQmf1cYBql4jxazFsOJ"
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:w-1/2 w-full">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"            
                src="https://drive.google.com/uc?export=view&id=1IggKimjkz4pEnA7XrsRMT0HQrjtfM5Tl"
                
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:w-1/2 w-full">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"             
                src="https://drive.google.com/uc?export=view&id=1sHe66qOTLjK4BXEUIvD2aiAz117zs0wH"
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:w-1/2 w-full">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"              
                
                src="https://drive.google.com/uc?export=view&id=1xvYs_MF0GWqFSRiOk4HdD5RsVCwPp-Lz"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatmanPage;
