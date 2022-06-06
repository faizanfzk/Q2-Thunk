import { actionTypes } from "./action"

const initState={
    isAuth:false,
    token:null
}
export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case actionTypes.LOG_IN:{
            return{
              ...state,
                isAuth:true,
                token:state.token
            }
        }
        case actionTypes.LOG_OUT:{
            return{
                ...state,
                isAuth:false,
                token:null
            }
        }
        default:
            return state


    }
}