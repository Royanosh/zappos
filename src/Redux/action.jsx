import { ERROR, 
    LOGOUT, SETUSER 
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

