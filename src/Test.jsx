import { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";

const Test = () => {
  const [results, setResults] = useState([]);

  const stockExchangePairs = [
    { stock: "GOOG", exchange: "NASDAQ" },
    { stock: "INFY", exchange: "NSE" },
  ];

  useEffect(() => {
    const fetchStockInfo = async (stockCode, exchangeCode) => {
      try {
        const response = await axiosInstance.post(`/stock`, {
          stock_code: stockCode,
          exchange_code: exchangeCode,
        });

        return response.data;
      } catch (error) {
        console.error(
          `Error fetching data for ${stockCode}:${exchangeCode}`,
          error
        );
      }
    };

    const fetchData = async () => {
      const data = [];
      for (const pair of stockExchangePairs) {
        const result = await fetchStockInfo(pair.stock, pair.exchange);
        if (result) {
          data.push({
            data: result,
          });
        }
      }
      setResults(data);
    };

    // fetchData();
  }, []);

  console.log("result", results);

  return (
    <div>
      <h1>Stock Information</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <h2>title - {result?.data?.data?.summary?.title}</h2>
            <h2>price - {result?.data?.data?.summary?.price}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
