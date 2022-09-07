import Item from "../Item/Item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
        <div className="listarow1">
        {data.map(chocolate => <Item key={chocolate.id} info={chocolate} />)}
        </div>
    );
}

export default ItemList;