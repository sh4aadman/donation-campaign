import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Donation from './components/Donation/Donation.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import Home from './components/Home/Home.jsx'
import DonationDetails from './components/DonationDetails/DonationDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/donations.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('/donations.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/donations/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/donations.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
