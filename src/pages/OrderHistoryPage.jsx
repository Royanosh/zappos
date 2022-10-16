import { Box, Image } from "@chakra-ui/react"
import { useSelector } from "react-redux";


const OrderHistoryPage = ()=>{
    const userprofile = useSelector((state) => state.userprofile);
    const { orders } = userprofile;
    return(
        <Box>
            {
                orders.map((elem)=>(
                    <Image src={elem.imageurl} alt="order image"/>
                ))
            }
        </Box>
    )
}

export default OrderHistoryPage;