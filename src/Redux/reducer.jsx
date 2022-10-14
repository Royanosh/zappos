import { ERROR, 
    LOGOUT, SETUSER,
} from './actionTypes'


  
  const initState = {
    error: false,
    userprofile: {},
    isauth : false
  };
  
  function reducer(state = initState, { type, payload }) {
    switch (type) {

        case ERROR: {
            return {
                error: true,
                userprofile: {},
                isauth : false
            };
          }


        case SETUSER: {
            return {
              error: false,
              userprofile: payload,
              isauth : true
          };
        }


        case LOGOUT: {
            return {
                error: false,
                userprofile: {},
                isauth : false
            };
        }

      default: {
        return state;
      }
    }
  }
  
  export default reducer;
  