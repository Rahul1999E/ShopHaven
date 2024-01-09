import { ActionType } from '../Action/index';


export const setProduct =(product) =>{
    return{
        type:ActionType.SET_PRODUCT,
        payload: product
    };
}


export const selectedProduct =(product) =>{

    return{

        type:ActionType.SELECTED_PRODUCT,
        payload: product
    };
}

export const removeSelectedProduct = () => {
    return {
      type: ActionType.REMOVE_SELECTED_PRODUCT,
    };
  };