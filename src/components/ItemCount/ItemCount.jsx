import React, { useState } from "react";
import Swal from "sweetalert2";


export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] =  useState(initial);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    
    return( 
        <div className="counter">
            <div>
            <button disabled={count <= 0} onClick={decrease} className="botones">-</button>
            <span className="coun">{count}</span>
            <button disabled={count >= 10} onClick={increase} className="botones">+</button>
            </div>
                <button id="miboton" disabled={stock <= 0} onClick={() => onAdd} className="agregar">Agregar al carrito</button>
            </div>
    )
}




export default ItemCount;