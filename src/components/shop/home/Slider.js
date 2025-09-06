import React, { Fragment, useEffect, useContext, useState } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import { prevSlide, nextSlide } from "./Mixins";

const apiURL = process.env.REACT_APP_API_URL;

const Slider = () => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);
  const [fade, setFade] = useState(true); 

  useEffect(() => {
    sliderImages(dispatch);
    
  }, []);

  // Automate slide change every 10 seconds with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      
      setFade(false);
      setTimeout(() => {
        setSlide((prevSlide) => (prevSlide + 1) % data.sliderImages.length);
        setFade(true);
      }, 500); 
    }, 7000); 

    return () => clearInterval(interval); // Cleanup on unmount
  }, [data.sliderImages.length]);

  return (
    <Fragment>
      <div className="relative mt-16 bg-gray-100 border-2">
        {data.sliderImages.length > 0 ? (
          <img
            className={`w-full transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
            src={`${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage}`}
            alt="sliderImage"
          />
        ) : (
          ""
        )}

        {data?.sliderImages?.length > 0 ? (
          <>
            <svg
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  prevSlide(data.sliderImages.length, slide, setSlide);
                  setFade(true);
                }, 500);
              }}
              className={`z-10 absolute top-0 left-0 mt-64 flex justify-end items-center box-border flex justify-center w-12 h-12 text-gray-700 cursor-pointer hover:text-yellow-700`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <svg
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  nextSlide(data.sliderImages.length, slide, setSlide);
                  setFade(true);
                }, 500);
              }}
              className={`z-10 absolute top-0 right-0 mt-64 flex justify-start items-center box-border flex justify-center w-12 h-12 text-gray-700 cursor-pointer hover:text-yellow-700`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            
            {/* Shop now button */}

            {/* <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="#shop"
                style={{ background: "#303031" }}
                className="cursor-pointer box-border text-2xl text-white px-4 py-2 rounded"
              >
                Shop Now
              </a>
            </div> */}
          </>
        ) : null}
      </div>
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;
