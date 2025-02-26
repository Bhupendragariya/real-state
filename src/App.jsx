import { useState } from 'react'
import HeaderTop from './componant/HeaderTop';
import Header from './componant/Header';
import Footer from './componant/footer';
import Home from './componant/Home';
import Gallery from './componant/Gallery';
import Blog from './componant/blog';
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([

  {
    path:"/",
    element:
    <div>
      <HeaderTop/>
      <Home/>
      <Footer/>
    </div>
  },
  {
    path:"/galleary",
    element: 
    <div>
      <Header/>
      <Gallery/>
      <Footer/>
    </div>
  },
  {
    path:"/blog",
    element:
    <div>
      <Header/>
      <Blog/>
      <Footer/>
    </div>
  }
]);





function App() {

  return (

    <div>
      <RouterProvider router={router}/>
    </div>

  

  
  )
}

export default App
