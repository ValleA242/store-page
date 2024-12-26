import { createContext, useState } from "react";
import { productsArray } from "./productStore";

export const CartContext = createContext({
    items: [], //holds items in array 
    getProductQuantity: () => { }, //this function will get passed to provider
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { }
});

export function CartProvider({ children })