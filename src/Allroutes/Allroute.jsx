import { Route, Routes } from "react-router-dom"
import PrivateRoute from "../components/Privateroute";
import LandingPage from "../pages/LandingPage"
import MensClothing from "../pages/MensClothing";
import Product from "../pages/Product";
import Products from "../pages/Products";
import SignIn from "../pages/SignIn";
import SignUP from "../pages/SignUP";
import WomensClothing from "../pages/WomensClothing";


const Allroute = ()=>{


    return(
        <Routes>

                <Route path="/" element={<LandingPage/>}></Route>
                {/* Landing page */}


                <Route path="/mensclothing" element={<MensClothing/>}></Route>
                <Route path="/womensclothing" element={<WomensClothing/>}></Route>

                <Route path="/category/:cat" element={<Products/>}></Route>

                <Route path="/category/:cat/:id" element={
                    <PrivateRoute><Product/></PrivateRoute>
                }></Route>

                <Route path="/signin" element={<SignIn/>}></Route>
                <Route path="/signup" element={<SignUP/>}></Route>


        </Routes>
    )
}

export default Allroute;