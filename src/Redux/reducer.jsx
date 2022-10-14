import { ADDTOCART, DELFROMCART, ERROR, 
    LOGOUT, SETUSER,
    INCREASECART, DECREASECART, SETSHIPADDRESS
} from './actionTypes'


  
  const initState = {
    error: false,
    userprofile: {},
    isauth : false,
    cart: [],
    shipaddress: ""
  };
  
  function reducer(state = initState, { type, payload }) {
    switch (type) {

        case ERROR: {
            return {
                error: true,
                userprofile: {},
                isauth : false,
                cart: []
            };
          }


        case SETUSER: {
            return {
              error: false,
              userprofile: payload,
              isauth : true,
              cart:[]
          };
        }


        case LOGOUT: {
            return {
                error: false,
                userprofile: {},
                isauth : false,
                cart:[]
            };
        }


        case ADDTOCART:{
          let ispresent = false;

          let newcart = state.cart.map((elem)=>{
            if(elem.desc===payload.desc){
              ispresent = true;
              return {...elem, count:+elem.count+1}
            }else{
              return elem
            }
          })

          if(!ispresent){
            newcart = [...state.cart, {...payload, count:1}];
          }


          return{
              ...state, cart:[...newcart]
          }
        }

        case DELFROMCART: {
            let newcart = state.cart.filter((elem)=>{
              return elem.desc !== payload.desc
            })

            return{
              ...state, cart:[...newcart]
            }
        }


        case INCREASECART:{
          let newcart = state.cart.map((elem)=>{

              if(elem.desc===payload.item.desc){
                return{
                  ...elem, count: +elem.count + +payload.qty
                }
              }else{
                return elem;
              }
          })

          return{
            ...state, cart:[...newcart]
          }
        }

        case DECREASECART:{
          let newcart = state.cart.map((elem)=>{

              if(elem.desc===payload.item.desc){
                return{
                  ...elem, count: +elem.count - payload.qty
                }
              }else{
                return elem;
              }
          })

          let update = newcart.filter((elem)=>{
            return elem.count > 0;
          })

          return{
            ...state, cart:[...update]
          }
        }

        case SETSHIPADDRESS:{

          return{
            ...state, shipaddress:payload
          }
        }



      default: {
        return state;
      }
    }
  }
  
  export default reducer;
  