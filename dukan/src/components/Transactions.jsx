import React from 'react'

function Transactions() {
  return (
    <div className='flex flex-col'>
        <div className='text-xl font-semibold'>
            Transactions | This Month
        </div>
        <div className='mt-1'>
        <button type="button" class="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">payouts (06)</button>

        <button type="button" class="text-white bg-blue-200 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">refunds (26)</button>
        </div>
    </div>
  )
}

export default Transactions
