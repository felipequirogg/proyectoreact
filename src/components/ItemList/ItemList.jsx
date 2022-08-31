import Item from "../Item/Item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
        data.map(chocolate => <Item key={chocolate.id} info={chocolate} />)
    );
}

export default ItemList;