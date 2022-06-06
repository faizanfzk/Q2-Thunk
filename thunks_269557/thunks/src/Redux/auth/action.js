export const actionTypes={
    LOG_IN:"LOG_IN",
    LOG_OUT:"LOG_OUT"
}

export const logIn=()=>{
    return{
       type:actionTypes.LOG_IN
    }
}
export const logOut=()=>{
    return{
       type:actionTypes.LOG_OUT
    }
}