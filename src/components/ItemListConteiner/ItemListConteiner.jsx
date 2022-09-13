import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import chocolates from "../Products/Products";


export const ItemListContainer = ({saludo}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(chocolates);
            }, 1000);
        });
        if(categoriaId){
            getData.then(res => setData(res.filter(chocolate => chocolate.category === categoriaId)));
        }else {
            getData.then(res => setData(res));
        }
    }, [categoriaId]) 

    return(
        <div className="listarow">
        <h2 className="productos">{saludo}</h2>
        <ItemList data = {data} />
        </div>
    );
}

export default ItemListContainer;