import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

// Cart Reducer
const cartReducer = (state, action) => {
    if (action.type === 'ADD'){
        console.log("CartProvider.cartReducer: ADD");
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
        
        //findexIndex() returns true or false
        const existingCartItemIdex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIdex];
        let updatedItems;

        if (existingCartItem) {            
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [... state.items];
            updatedItems[existingCartItemIdex] = updatedItem;
        } else {             
            updatedItems = state.items.concat(action.item);  
            // concat() returns a new array, rather than push(), which updates 
            // the one stored in memory (without React knowing about it)        
        }
             
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if (action.type === 'REMOVE'){
        console.log("CartProvider.cartReducer: REMOVE");
    }    
    return defaultCartState;
};

const CartProvider = (props) => {    
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item});
        // cartReducer = (state, action) => { } is triggered, line 10 - Cart Reducer
    };
    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id});
        // cartReducer = (state, action) => { } is triggered, line 10 - Cart Reducer        
    };
    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}> 
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;