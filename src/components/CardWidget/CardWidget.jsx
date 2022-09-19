import {HiShoppingCart} from 'react-icons/hi'
import React from 'react';
import { useCartContext } from '../../Context/CartContext';


export const CartWidget = () => {
    const {totalProducts} = useCartContext();

    return (
        <>
        <HiShoppingCart></HiShoppingCart>
        <span>{totalProducts() || ''}</span>
        </>
    )
}

export default CartWidget ;