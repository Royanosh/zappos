import { Box } from "@chakra-ui/react";
import Allroute from "./Allroutes/Allroute";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import MyCart from "./pages/MyCart";
function App() {
  return (
    <Box>
      {/* <Navbar/>


      <Allroute/>

      <Footer/>  */}
      <Cart />
      {/* <MyCart /> */}
    </Box>
  );
}

export default App;
