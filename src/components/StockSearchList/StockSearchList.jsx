/* eslint-disable react/prop-types */

export default function StockSearchList({ stockList }) {
  return (
    <ul
      role="list"
      className="absolute left-0 right-0 bg-white max-h-60 overflow-y-scroll border border-t-0 px-3 rounded-b-md shadow-sm divide-y divide-gray-100 col-span-12"
    >
      {stockList?.map((elem, id) => (
        <li key={id} className="flex justify-between gap-x-6 py-3 items-center">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Infosys
              </p>
              <p className="mt-1 text-xs text-gray-500">INFY : NSE</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              ₹ 625
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
