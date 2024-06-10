import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Component } from 'react'
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";

const apiKey = import.meta.env.VITE_API_KEY
console.log(apiKey)

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <><Navbar/><Home/><Footer/></>,
    key : 8
  },
  {
    path: "/about",
    element: <><Navbar/><About/><Footer/></>,
    key : 9
  },
  {
    path: "/contact",
    element: <><Navbar/><Contact/><Footer/></>,
    key : 10
  },
  {
    path: "/business",
    element: <><Navbar/><Hero pageSize={20} apiKey={apiKey} category={'business'} key={'1'} /><Footer/></>,
    key : 1
  },
  {
    path: "/entertainment",
    element: <><Navbar/><Hero pageSize={20} apiKey={apiKey} category={'entertainment'} key={'2'} /><Footer/></>,
     key : 2
  },
  {
    path: "/general",
    element: <><Navbar/><Hero pageSize={20} apiKey={apiKey} category={'general'} key={'3'} /><Footer/></>,
     key : 3
  },
  {
    path: "/health",
    element: <><Navbar/><Hero pageSize={20} apiKey={apiKey} category={'health'} key={'4'} /><Footer/></>,
     key : 4
  },
  {
    path: "/science",
    element: <><Navbar/><Hero pageSize={20} apiKey={apiKey} category={'science'} key={'5'} /><Footer/></>,
     key : 5
  },
  {
    path: "/sports",
    element: <><Navbar/><Hero pageSize={20} apiKey={apiKey} category={'sports'} key={'6'} /><Footer/></>,
     key : 6
  },
  {
    path: "/technology",
    element: <><Navbar/><Hero pageSize={20} apiKey={apiKey} category={'technology'} key={'7'} /><Footer/></>,
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
