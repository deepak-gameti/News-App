import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Component } from 'react'

const router = createBrowserRouter([
  {
    path: "/business",
    element: <><Navbar/><Hero pageSize={20} category={'business'} key='business' /></>,
  },
  {
    path: "/entertainment",
    element: <><Navbar/><Hero pageSize={20} category={'entertainment'} key='entertainment' /></>
  },
  {
    path: "/general",
    element: <><Navbar/><Hero pageSize={20} category={'general'} key='general' /></>
  },
  {
    path: "/health",
    element: <><Navbar/><Hero pageSize={20} category={'health'} key='health' /></>
  },
  {
    path: "/science",
    element: <><Navbar/><Hero pageSize={20} category={'science'} key='science' /></>
  },
  {
    path: "/sports",
    element: <><Navbar/><Hero pageSize={20} category={'sports'} key='sports' /></>
  },
  {
    path: "/technology",
    element: <><Navbar/><Hero pageSize={20} category={'technology'} key='technology' /></>
  },
]);


export class App extends Component {
  render() {
    return (
      <>
      <RouterProvider router={router} />
      </>
    )
  }
}

export default App
