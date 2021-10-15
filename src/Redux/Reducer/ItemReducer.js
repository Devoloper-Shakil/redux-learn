
import { addToItem,removeFromItem } from "../Action/AddToItem"
const ItemReducer=(state,Action)=>{

   switch(Action.type) {
       case addToItem:{
            return[...state,Action.payload]
          
       }
       case removeFromItem:{
           const newState = state.filter(item=> item.id !== Action.payload)
           return newState

       }

       default :
        return state

   }
}

export default ItemReducer;

