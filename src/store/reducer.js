import { GETFEEDS, GETINPUTVALUE } from "./types"



const initialState={
    data:[],
    inputvalue:""
}
export const movieReducer=(state=initialState,{type,payload})=>
{
   
     
    switch(type){
        case GETFEEDS:{
          return {...state,
        data:payload}
        }
        case GETINPUTVALUE:{
          return {...state,
        inputvalue:payload}
        }
       
       
        default:
            return state
        
    }


}