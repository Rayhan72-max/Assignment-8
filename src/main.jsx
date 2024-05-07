import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Component/Root/Root.jsx';
import Home from './assets/Component/Home/Home.jsx';
import Donation from './assets/Component/Donation/Donation.jsx';
import Statistics from './assets/Component/Statistics/Statistics.jsx';
import DonationDetails from './assets/Component/DonationDetails/DonationDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[{
      path: "/home",
      element: <Home></Home>,
      loader: ()=>fetch("../data.json")
      },
    {
      path: "/donation",
      element: <Donation></Donation>,
      loader: ()=> fetch("../data.json")
    },
  {
    path: "/statistics",
    element: <Statistics></Statistics>
  },
  {
    path: "/donationdetails/:id",
    element: <DonationDetails></DonationDetails>,
    loader: ()=>fetch("../data.json")
  }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
