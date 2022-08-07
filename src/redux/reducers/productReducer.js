import { ActionType } from "../constants/action-type";

const initialState ={
    products:[
        {
            id:1,
            title: "yared",
            category: "electronics",

        }
    ]
    ,
}
export const productReducer = (state = initialState , {type, payload}) => {
    switch(type){
        case ActionType.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}
