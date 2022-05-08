let initial={
    LoginStatus:false,
    token:""
}

export const AuthReducer=(store=initial,{type,payload})=>{
    switch(type){
        case "Status":
            return {...store,LoginStatus:true,token:payload}
        default:
            return store
    }
}