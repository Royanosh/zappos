import { Box } from '@chakra-ui/react';
import Allroute from './Allroutes/Allroute';
import './App.css';
import CheckoutPage from './components/Cart-Page-Components/CheckoutPage';
import Shipping_address from './components/Cart-Page-Components/Shipping_address';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (<>
  
    <Box>
      {/* <Navbar/> */}

      {/* <Allroute/> */}

      {/* <Footer/>  */}

      <CheckoutPage/>
    </Box>
    </>
  );
}

export default App;