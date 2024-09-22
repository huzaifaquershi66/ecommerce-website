import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"

import { Route } from "react-router-dom"
import Header from "./components/stylingcomp/Header"
import Footer from "./components/stylingcomp/Footer"
import Mainpagecontent from "./components/stylingcomp/mainpagecontent"
import AnniversarySale from "./components/routescomp/AnniversarySale"
import BuildYourOwnBundle from "./components/routescomp/BuildYourOwnBundle"
import BestSellers from "./components/routescomp/BestSellers"
import Deals from "./components/routescomp/Deals"
import Face from "./components/routescomp/Face"
import IceBlast from "./components/routescomp/IceBlast"
import Singleproductdetail from "./components/stylingcomp/Singleproductdetail"
import Checkout from "./components/stylingcomp/Checkout"
import { Outlet } from "react-router-dom"
import ScrollToTop from "./components/stylingcomp/Scrooltop"
import Showuserdata from "./components/stylingcomp/showuserdata"


function App() {
 

  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/userdetail" element={<Showuserdata/>}/>
        
        {/* Yeh routes header aur footer ke saath render honge */}
        <Route  element={<Layout />}>
          <Route path="/" element={<Mainpagecontent />} />
          <Route path="/productdetail/:productslug" element={<Singleproductdetail />} />
          <Route path="/anniversary-sale" element={<AnniversarySale />} />
          <Route path="/build-your-own-bundle" element={<BuildYourOwnBundle />} />
          <Route path="/ice-blast" element={<IceBlast />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/face" element={<Face />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}


function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Yeh Outlet component content render karega */}
      </main>
      <Footer />
    </>
  );
}
export default App
