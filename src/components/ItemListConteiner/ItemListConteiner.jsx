import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export const ItemListContainer = ({saludo}) => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        <>
        <h2 className="productos">{saludo}</h2>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;