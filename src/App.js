// App.js
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import "./main.css";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import NewArrivals from "./components/NewArrivals";
import TopRated from "./components/TopRated";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Error from "./components/Error";
import ProductDetail from "./components/ProductDetail";
import Bestseller from "./components/Bestseller";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "",
          element: (
            <div>
              <Trending />
              <NewArrivals />
              <TopRated />
              <Bestseller />
            </div>
          ),
        },
        {
          path: "signin",
          element: <Signin />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "/products/:productId",
          element: <ProductDetail />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <AuthProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
