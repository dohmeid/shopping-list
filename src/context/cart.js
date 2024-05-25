import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    //****************************STATES & HOOKS**********************************
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);

    //update the local storage whenever cartItems change
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    //****************************FUNCTIONS****************************
    //add a product to the cast
    const addProductToCart = (product) => {
        //check if the item is already in the cart
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === product.id);

        // if the item is already in the cart, increase the quantity of the item
        if (isItemInCart) {
            setCartItems(cartItems.map((cartItem) => cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
        }
        else { // if the item is not in the cart, add the item to the cart
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    }

    //edit the qauntity of an item 
    const editProuctQauntity = (id, newQuantity) => {
        setCartItems(cartItems.map((cartItem) => cartItem.id === id ? { ...cartItem, quantity: newQuantity } : cartItem));
    };

    //delete an item from the cart
    const deleteProductFromCart = (id) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
    }

    //compute the total quantity and total price of cart items  whenever cartItems change
    const getTotalPrice = () => {
        let price = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return price;
    }

    const getTotalQuantity = () => {
        let qauntity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        return qauntity;
    }



    return (
        <CartContext.Provider
            value={{
                cartItems,
                addProductToCart,
                editProuctQauntity,
                deleteProductFromCart,
                getTotalPrice,
                getTotalQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};