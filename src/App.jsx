import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Component } from 'react'
import Footer from "./components/Footer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Hero pageSize={20} category={'home'} key={'8'} /><Footer/></>,
    key : 8
  },
  {
    path: "/business",
    element: <><Navbar/><Hero pageSize={20} category={'business'} key={'1'} /><Footer/></>,
    key : 1
  },
  {
    path: "/entertainment",
    element: <><Navbar/><Hero pageSize={20} category={'entertainment'} key={'2'} /><Footer/></>,
     key : 2
  },
  {
    path: "/general",
    element: <><Navbar/><Hero pageSize={20} category={'general'} key={'3'} /><Footer/></>,
     key : 3
  },
  {
    path: "/health",
    element: <><Navbar/><Hero pageSize={20} category={'health'} key={'4'} /><Footer/></>,
     key : 4
  },
  {
    path: "/science",
    element: <><Navbar/><Hero pageSize={20} category={'science'} key={'5'} /><Footer/></>,
     key : 5
  },
  {
    path: "/sports",
    element: <><Navbar/><Hero pageSize={20} category={'sports'} key={'6'} /><Footer/></>,
     key : 6
  },
  {
    path: "/technology",
    element: <><Navbar/><Hero pageSize={20} category={'technology'} key={'7'} /><Footer/></>,
    key : 7
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
