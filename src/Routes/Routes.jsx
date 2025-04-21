import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import DoctorDetails from '../components/DoctorsDetails/DoctorDetails';

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
            loader:()=>fetch('../doctorsData.json'),
            hydrateFallbackElement: <p>loading.....</p>
        },
        {
          path:"/doctorDetails/:registration_number",
          Component: DoctorDetails,
          loader:()=>fetch('../doctorsData.json'),
            hydrateFallbackElement: <p>loading.....</p>
        }
      ]
    },
  ]);