import React from "react";

function Tables() {
  return (
    <div className="mt-10 border">
      <div className="flex justify-between my-2 mx-2">
        <input
          type="search"
          id="default-search"
          className="block w-64 h-8 p-3 ps-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:text-black dark:focus:ring-blue-500 "
          placeholder="search trasaction or Id"
        />
        <div className="flex justify-center">
          <button
            className="w-15 mr-3 justify-center text-black h-8  bg-gray-200 hover:bg-gray-300  font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center"
            type="button"
          >
            sort
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
          </button>
          <button
            className="w-15 justify-center text-black h-8  bg-gray-200 hover:bg-gray-300  font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase ">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50">
                Order Id
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 ">
                Transaction Id
              </th>
              <th scope="col" className="px-6 py-3">
                Order Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-200 whitespace-nowrap bg-gray-50"
              >
                #34323
              </th>
              <td className="px-6 py-4 flex items-baseline">
              <div className="w-2 h-2 bg-gray-500 rounded-full mr-1"></div>
                Processing
                </td>
              <td className="px-6 py-4 bg-gray-50 ">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-200 whitespace-nowrap bg-gray-50 "
              >
                #334jj
              </th>
              <td className="px-6 py-4 flex items-baseline">
              <div className="w-2 h-2 bg-gray-500 rounded-full mr-1"></div>
              Processing
              </td>
              <td className="px-6 py-4 bg-gray-50 ">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-200 whitespace-nowrap bg-gray-50 "
              >
                #kdjf22
              </th>
              <td className="px-6 py-4 flex items-baseline">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              Successfull
              </td>
              <td className="px-6 py-4 bg-gray-50 ">Accessories</td>
              <td className="px-6 py-4">$99</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-200 whitespace-nowrap bg-gray-50 "
              >
                #898977
              </th>
              <td className="px-6 py-4 flex items-baseline">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              Successfull
              </td>
              <td className="px-6 py-4 bg-gray-50 ">Phone</td>
              <td className="px-6 py-4">$799</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-200 whitespace-nowrap bg-gray-50 "
              >
                #8u0880
              </th>
              <td className="px-6 py-4 flex items-baseline">
              <div className="w-2 h-2 bg-gray-500 rounded-full mr-1"></div>
              Processing
              </td>
              <td className="px-6 py-4 bg-gray-50 ">Wearables</td>
              <td className="px-6 py-4">$999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tables;
