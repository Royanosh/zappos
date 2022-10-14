import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children})=>{

    const isauth = useSelector((state) => state.isauth);


    if(!isauth)
    return <Navigate to='/login'/>

    return(
        children
    )
}

export default PrivateRoute;