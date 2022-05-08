let initial={
    todos:[]
}

export const TodoReducer=(store=initial,{type,payload})=>{
    switch(type){
        case "ADD_TODO":
            return {...store,todos:payload}
        default:
            return store
    }
}