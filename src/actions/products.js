import trendingItems from '../mock/trendingItems'
import allProducts from '../mock/productInfo'
import { GET_TRENGING_ITEMS, GET_All_ITEMS } from "../constant/types";



export const getTrendngProducts = () => {
    return {
        type: GET_TRENGING_ITEMS,
        payload: trendingItems
    };
}

export const getAllProducts = () => {
    
    return {
        type: GET_All_ITEMS,
        payload: allProducts
    };
}