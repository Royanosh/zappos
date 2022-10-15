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
          let newcart = [];

          if(payload.cart)
          newcart = payload.cart

            return {
              error: false,
              userprofile: payload,
              isauth : true,
              cart:newcart  //update for json integration
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
          let newcart = [];
          if(state.cart.length > 0){
            newcart = state.cart.map((elem)=>{
            if(elem.desc===payload.desc){
              ispresent = true;
              return {...elem, count:+elem.count+1}
            }else{
              return elem
            }
          })}

          if(!ispresent){
            newcart = [...state.cart, {...payload, count:1}];
          }
          // console.log(state.userprofile)
          fetch(`http://localhost:3000/users/${state.userprofile.id}`,{     //update for json integration
              method: 'PATCH',
              body: JSON.stringify({
                cart: newcart,
              }),
              headers: {
                'Content-type': 'application/json'
              }
          })

          return{
              ...state, cart:[...newcart]
          }
        }

        case DELFROMCART: {
            let newcart = state.cart.filter((elem)=>{
              return elem.desc !== payload.desc
            })


            fetch(`http://localhost:3000/users/${state.userprofile.id}`,{     //update for json integration
              method: 'PATCH',
              body: JSON.stringify({
                cart: newcart,
              }),
              headers: {
                'Content-type': 'application/json'
              }
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


          fetch(`http://localhost:3000/users/${state.userprofile.id}`,{     //update for json integration
              method: 'PATCH',
              body: JSON.stringify({
                cart: newcart,
              }),
              headers: {
                'Content-type': 'application/json'
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

          fetch(`http://localhost:3000/users/${state.userprofile.id}`,{     //update for json integration
              method: 'PATCH',
              body: JSON.stringify({
                cart: newcart,
              }),
              headers: {
                'Content-type': 'application/json'
              }
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
  