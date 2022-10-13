import { Box } from '@chakra-ui/react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage'
import MensClothing from './pages/MensClothing';
import Product from './pages/Product';
import Products from './pages/Products';
import WomensClothing from './pages/WomensClothing';
function App() {
  return (
    <Box>
      <Navbar/>
      <LandingPage/>
        {/* <MensClothing/>  */}
      {/* <WomensClothing/> */}
      <Product/> 
      {/* <Products/> */}
    </Box>
  );
}

export default App;