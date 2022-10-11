import { Box } from "@chakra-ui/react"
import BelowNavbarBanner from "../components/LandingPage-Components/BelowNavbarBanner";
import PopularCategory from "../components/LandingPage-Components/PopularCategory";


const LandingPage = ()=>{


    return(
        <Box>
            <BelowNavbarBanner/> 
            <PopularCategory/>
        </Box>
    )
}

export default LandingPage;