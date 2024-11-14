import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Layout from '../Layout';
import Home from './components/home/Home';
import Navbar from './components/Navbar/Navbar';
import Alldata from './components/All data/Alldata';
import Accesories from './components/accesories/Accesories';
import Laptop from './components/laptop/Laptop';
import Phone from './components/phone/Phone';
import Watch from './components/watch/Watch';
import MacBook from './components/mac/MacBook';
import Iphone from './components/iphone/Iphone';
import Header from './components/header/Header';
import Fetch from './components/fatchdata/Fetch';
import Stat from './components/Statistics/Stat';
import Dash from './components/Dashboard/Dash ';
import Service from './components/service/Service';
import Details from './components/Details/Details';


const router = createBrowserRouter([

    { 
      path:'/',
      element: <Layout/>,
      children:[
        {
          path: '/',
          element: <Home/>,
        },
        {
          path:'/',
          element:<Alldata/>
        },

        {
          path:'/home',
          
          element:<Home/>
        },
        {
          path:'/statistics',
          element: <Stat/>
        },
        {
          path: '/dashboard',
          element: <Dash/> 
        },
        {
          path:'service',
          element: <Service/>
        },
        {
          path:'/details/:productId',
          loader: ({params})=> fetch(`/public/AllProduct.json/${params.productId}`),
          element: <Details></Details>
        }
    
        
      ]
    },
    {
      path:'all',
      loader: ()=> fetch('/public/AllProduct.json'),
      element:<Alldata/>
    },
    {
      path:'/laptop',
      loader: ()=> fetch('/public/laptops.json'),
      element: <Laptop/>
    },
    {
      path:'/phone',
      loader: ()=> fetch('/public/phone.json'),
      element: <Phone/>
    },
    {
      path:'/accessories',
      element: <Accesories/>
    },
    {
      path:'/watch',
      element: <Watch/>
    },
    {
      path:'/mac',
      element: <MacBook/>
    },
    {
      path:'/iphone',
      element: <Iphone/>
    },
    


  ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
