

export const addToItem=(payload)=>{
    return{
        type: "AddToItem",
        payload
    }
}


export const removeFromItem=(payload)=>{
    return{
        type: "RemoveFromItem",
        payload
    }
}