import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "swiper/css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
const persistor = persistStore(store);
import { persistStore } from "redux-persist";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
          <ToastContainer />
          <ReactQueryDevtools />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
