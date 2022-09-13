import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import chocolates from "../Products/Products"

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams ();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(chocolates);
            }, 3000);
        });

        getData.then(res => setData(res.find(chocolates.id === parseInt(detalleId))));
    }, [])

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;