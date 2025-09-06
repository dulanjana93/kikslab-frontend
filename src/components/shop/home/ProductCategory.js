import React, { Fragment, useContext } from "react";
import ProductCategoryDropdown from "./ProductCategoryDropdown";
import { HomeContext } from "./index";

const ProductCategory = (props) => {
  const { data, dispatch } = useContext(HomeContext);

  return (
    <Fragment>
      {/* Category & Filter Section */}
      <div className="flex justify-between items-center font-medium py-4">
        {/* Categories Dropdown */}
        <div
          onClick={() =>
            dispatch({
              type: "categoryListDropdown",
              payload: !data.categoryListDropdown,
            })
          }
          className={`flex items-center space-x-1 cursor-pointer transition duration-200 ${
            data.categoryListDropdown ? "text-yellow-700" : "text-gray-700"
          }`}
        >
          <span className="text-md md:text-lg hover:text-yellow-700">
            Categories
          </span>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              data.categoryListDropdown ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Filter and Search */}
        <div className="flex space-x-4">
          {/* Filter Dropdown */}
          <div
            onClick={() =>
              dispatch({
                type: "filterListDropdown",
                payload: !data.filterListDropdown,
              })
            }
            className={`flex items-center space-x-1 cursor-pointer transition duration-200 ${
              data.filterListDropdown ? "text-yellow-700" : "text-gray-700"
            }`}
          >
            <span className="text-md md:text-lg">Filter</span>
            <svg
              className="w-5 h-5 text-current"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>

          <span className="text-gray-500">/</span>

          {/* Search Dropdown */}
          <div
            onClick={() =>
              dispatch({
                type: "searchDropdown",
                payload: !data.searchDropdown,
              })
            }
            className={`flex items-center space-x-1 cursor-pointer transition duration-200 ${
              data.searchDropdown ? "text-yellow-700" : "text-gray-700"
            }`}
          >
            <span className="text-md md:text-lg">Search</span>
            <svg
              className="w-5 h-5 text-current"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Product Category Dropdown */}
      <ProductCategoryDropdown />
    </Fragment>
  );
};

export default ProductCategory;
