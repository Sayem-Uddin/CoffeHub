import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AddCoffe from './Components/AddCoffe/AddCoffe.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffe from './Components/UpdateCoffe/UpdateCoffe.jsx'
import Home from './Components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
       path:"/",
       element:<Home></Home>
      },
      {
        path:"/addCoffe",
        element: <AddCoffe></AddCoffe>
      },
      { 
        path:"/updateCoffe",
        element:<UpdateCoffe></UpdateCoffe>
      }
    ]
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
