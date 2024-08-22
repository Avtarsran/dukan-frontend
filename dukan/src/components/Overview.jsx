import React from "react";

function Overview() {
  return (
    <div className="flex justify-between">
      <div className="font-semibold text-xl mr-3">Overview</div>
      <div>
        <button
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          className="text-black h-10 -mt-1 bg-gray-200 hover:bg-gray-300  font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center"
          type="button"
        >
          This Month
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Overview;
