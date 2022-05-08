export const changeStatus="Status"


export const setStatus=(value)=>{
    return {
        type:changeStatus,
        payload:value
    }
}
