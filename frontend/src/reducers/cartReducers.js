import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems:[] }, action)=>{
    switch(action.type){
        
        case CART_ADD_ITEM:
        
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === item.product);
            /* updating item if it already exist in array */
            /* 
                keep current state of all elements in [cartItems] array. Assign the product
                from payload to this variable [x]. Check to see if [x] has an id that matches any of
                the elements that are currently in the array. If it does replace the element
                that already exist in the array with [x]. Return [x] as default payload product.
            */
            if(existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map( x =>
                        x.product === existItem.product 
                        ? item : x 
                    )
                }
            }else{
                return {...state, cartItems: [...state.cartItems, item]};
            }
            
        ;
        case CART_REMOVE_ITEM:
            return { ...state, cartItems: state.cartItems.filter( x => x.product !== action.payload )}
        ;
        case CART_SAVE_SHIPPING_ADDRESS:
            return{ ...state, shippingAddress: action.payload }
        ;
        case CART_SAVE_PAYMENT_METHOD:
            return{ ...state, paymentMethod: action.payload }
        ;
        case CART_EMPTY:
            return { ...state, cartItems: [] }
        ;
        default:
            return state
        ;

    }
}