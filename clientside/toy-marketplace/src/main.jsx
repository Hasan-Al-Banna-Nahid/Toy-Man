import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home";
import Provider from "./Components/Authentication/Provider/Provider";
import Registration from "./Components/Authentication/Registration/Registration";
import Login from "./Components/Authentication/Login/Login";
import Error from "./Components/404Page/error";
import Blog from "./Components/Blog/Blog";
import AddToy from "./Components/AddToy/AddToy";
import AllToys from "./Components/AllToys/AllToys";
import ToyDetails from "./Components/ToyDetails/ToyDetails";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import MyToy from "./Components/MyToy/MyToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/addToy",
        element: <AddToy />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
        loader: () => fetch("https://toyman.vercel.app/toysData?limit=20"),
      },
      {
        path: "/toysDetails/:id",
        element: (
          <ProtectedRoute>
            <ToyDetails />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toyman.vercel.app/toysData/${params.id}`),
      },

      {
        path: "/myToy",
        element: (
          <ProtectedRoute>
            <MyToy />
          </ProtectedRoute>
        ),
        loader: () => fetch(`https://toyman.vercel.app/toysData`),
      },
      {
        path: "/myToy/:id",
        element: (
          <ProtectedRoute>
            <MyToy />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toyman.vercel.app/toysData/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
