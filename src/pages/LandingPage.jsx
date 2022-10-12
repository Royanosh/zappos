import { Box } from "@chakra-ui/react"
import BelowNavbarBanner from "../components/LandingPage-Components/BelowNavbarBanner";
import Bigbanners from "../components/LandingPage-Components/Bigbanners";
import PopularCategory from "../components/LandingPage-Components/PopularCategory";
import PopularItems from "../components/LandingPage-Components/PopularItems";


const LandingPage = ()=>{


    return(
        <Box>
            <BelowNavbarBanner/> 
            <PopularCategory/>
            <Bigbanners/>
            <PopularItems/>
        </Box>
    )
}

export default LandingPage;