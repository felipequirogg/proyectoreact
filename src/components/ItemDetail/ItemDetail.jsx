import React from "react";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";



export const ItemDetail = ({data}) => {
const [goToCart, setGoToCart] = useState(false);
const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return(
        <div className="conjunto">
        <div>
            <img className="chocolateimg" src={data.image} alt="" />
            <div>
                <h1 className="chocolate">{data.title}</h1>
                {
                    goToCart
                    ? <Link to='/cart' >Terminar compra</Link>
                    : <ItemCount initial={1} stock={10} onAdd={onAdd} />
                }
            </div>
        </div>
        </div>
    );
}

export default ItemDetail;