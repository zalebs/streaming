import { GETFEEDS, GETINPUTVALUE } from "./types"
import axios from "axios"
export const getFeeds=(api,query)=>(dispatch)=>{
console.log(api,query)
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${query}`).then((r)=>{
       console.log(r.data.results,"results")

        dispatch({type:GETFEEDS,payload:r.data.results})
    })
}
export const getinputvalue=(value)=>(dispatch)=>{
console.log(value,"rich")
   

        dispatch({type:GETINPUTVALUE,payload:value})
    
}



