import { ERROR, 
    LOGOUT, SETUSER,
    ADDTOCART, DELFROMCART,
    INCREASECART, SETSHIPADDRESS, CHECKOUTDONE, GENDERFILTER, BRANDFILTER
} from './actionTypes'




  export const getError = () => ({
    type: ERROR
  });
  

  export const getlogout = () => ({
    type: LOGOUT
  });


  export const setuser = (user) => ({
    type: SETUSER,
    payload: user
  });

  export const addtocart = (item) => ({
    type: ADDTOCART,
    payload: item
  });

  export const deletefromcart = (item) => ({
    type: DELFROMCART,
    payload: item
  });

  export const increasecart = (data) => ({
    type: INCREASECART,
    payload: data
  });

  // export const decreasecart = (data) => ({
  //   type: DECREASECART,
  //   payload: data
  // });

  export const setshipaddress = (data)=>({
    type: SETSHIPADDRESS,
    payload: data
  })

  export const checkoutdone = ()=>({
    type: CHECKOUTDONE
  })

  export const genderfilter = (data)=>({
    type: GENDERFILTER,
    payload: data
  })

  export const brandfilter = (data)=>({
    type: BRANDFILTER,
    payload: data
  })
  
export const register = (user) => (dispatch) => {

    fetch(`http://localhost:3000/users`,{
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
    })
      .then((res) => res.json())
      .catch(() => dispatch(getError()));
    };

