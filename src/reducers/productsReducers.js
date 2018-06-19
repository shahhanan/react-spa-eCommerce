import { GET_TRENGING_ITEMS, GET_All_ITEMS } from "../constant/types";
import trendingItems from "../mock/trendingItems";
import { initialState } from '../constant/types'

export default function(state = initialState, action) {
    switch(action.type){
        case GET_TRENGING_ITEMS:
         return{
             ... state,
             trendingItems: action.payload
         } 
         case GET_All_ITEMS:
         return{
            ... state,
            allProducts: action.payload
         }   
        default:
        return state;
    }
}