import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import DoctorDetails from '../components/DoctorsDetails/DoctorDetails';
import MyBookings from '../pages/MyBookings/MyBookings';
import Blogs from '../pages/Blogs/Blogs';
import ErrorPage2 from '../pages/ErrorPage/ErrorPage2';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch('/doctorsData.json'),
        hydrateFallbackElement: <p>loading.....</p>
      },
      {
        path: "/doctorDetails/:id",
        Component: DoctorDetails,
        loader: () => fetch('/doctorsData.json'),
        hydrateFallbackElement: <p>loading.....</p>
      },
      {
        path: "/myBookings",
        Component: MyBookings,
        loader: () => fetch('/doctorsData.json'),
        hydrateFallbackElement: <p>loading.....</p>
      },
      {
        path: "/blogs",
        Component: Blogs,
        loader: () => fetch('/questionData.json'),
        hydrateFallbackElement: <p>loading.....</p>
      },
      {
        path: "/error",
        Component: ErrorPage2,
      }

    ]
  },
]);