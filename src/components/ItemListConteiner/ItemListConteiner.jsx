import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where, } from 'firebase/firestore'
import { db } from "../../firebase/config";

export const ItemListContainer = ({saludo}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
const itemCollection = collection(db, 'productos');

const referencia = categoriaId
    ? query(itemCollection, where('category', '==', categoriaId))
    : itemCollection;

    getDocs(referencia)
    .then((res) => {
        console.log(res)
        const products = res.docs.map((prod) => {
            return {
                id: prod.id,
                ...prod.data(),
            };
            });
        setData(products);
    })
    .catch((error) => {
        console.log(error);
    })
    }, [categoriaId]) 

    return(
        <div className="listarow">
        <h2 className="productos">{saludo}</h2>
        <ItemList data = {data} />
        </div>
    );
}

export default ItemListContainer;
