import React from "react";

function Card({ title, amount, orders, bgColor, color, colorForOrder }) {
  return (
    <div className={`shadow min-w-64 sm:min-w-64 md:w-72 flex flex-col p-2 bg-${bgColor}-500 rounded`}>
      <div className={`flex text-${color} flex-end`}>
        <div className={`mr-2 text-${color}`}>{title}</div>
        <div className="mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-between my-4">
        <div className={`text-2xl text-${color} font-semibold`}>
          $ {amount}
        </div>
        <div className={`text-${colorForOrder? colorForOrder+"-200":color} underline flex mt-1.5 `}>
          <div>{orders}</div>
          <div className="mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 underline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
