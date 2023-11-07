/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

export default function StockSearchList({
  stockList,
  setSearchListQueryData,
  inputVal,
}) {
  const [selectedStock, setSelectedStock] = useState("");
  const [show, setShow] = useState(false);

  const stockHandler = (stock) => {
    setSelectedStock(stock);
    setSearchListQueryData((prev) => ({
      ...prev,
      stock_name: stock.stock_name,
    }));
    setShow(false);

    console.log("stockHandler stock", stock);
  };

  useEffect(() => {
    setShow(true);
  }, [inputVal]);

  return (
    stockList &&
    show && (
      <ul
        role="list"
        className="absolute left-0 right-0 bg-white max-h-60 overflow-y-scroll border border-t-0 px-2 py-2 rounded-b-md shadow-sm divide-y divide-gray-100 col-span-12 z-30"
      >
        {stockList?.length === 0 && (
          <li className="flex justify-between gap-x-6 py-3 items-center">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  No results
                </p>
              </div>
            </div>
          </li>
        )}

        {stockList?.map((elem, id) => (
          <li
            key={id}
            className="flex justify-between gap-x-6 p-3 rounded-md items-center cursor-pointer hover:bg-gray-200"
            onClick={() => stockHandler(elem)}
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {elem.stock_name}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {elem.symbol} : {elem.exchange_short_name}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {elem.country_code === "IN"
                  ? "₹"
                  : elem.country_code === "US"
                  ? "$"
                  : elem.country_code}{" "}
                {elem.current_price}
              </p>
            </div>
          </li>
        ))}
      </ul>
    )
  );
}
