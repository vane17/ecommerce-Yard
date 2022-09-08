import React, {useState} from "react";
const initialState = {
    cart:[]
}
const useInitialState = () => {
    const [state,setState] = useState(initialState);
    //funcion que permite cambiar o agregar valores

    const addToCard = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });       
    };

    const removeFromCart = (indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((product,index) => index !== indexValue),//buscar el item que recibi que se va a eliminar y quiatrlo
        });
    }

    return {
        state,
        addToCard,
        removeFromCart
    };
    
}
export {useInitialState};