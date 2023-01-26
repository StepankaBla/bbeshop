import { 
  createBrowserRouter, Outlet, RouterProvider
 } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import "./app.scss"
import { motion, AnimatePresence } from "framer-motion";
const Layout = () =>{
  return (
    <AnimatePresence>
   <motion.div 
    initial={{ opacity:0, y:0}}
    animate={{ opacity:1, y:0}}
    exit={{ opacity:0, y:15}}
    transition={{ delay: 0.10}} 
   className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </motion.div>
    </AnimatePresence>
 
  )
}

const router = createBrowserRouter([
  {//koncove body pro domovskou stranku, produkt..
    path: "/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/products/:id",
        element:<Products/>,
      },
      {
        path: "/product/:id",
        element:<Product/>,
      },
    ]
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
