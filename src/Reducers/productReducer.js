import { ActionType } from '../Action/index';
 
 const initialstate ={
    product:[]
 }


export const productReducer = (state = initialstate, {type, payload})=>{

    switch(type) {

        case ActionType.SET_PRODUCT: 
            return {...state, product: payload};
        
        default:
        return state; 

    }

}

export const ProductDetailReducer = (state= initialstate, {type, payload}) =>{

    switch(type){
        case ActionType.SELECTED_PRODUCT:
        return {...state, product: payload};
        case ActionType.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}


