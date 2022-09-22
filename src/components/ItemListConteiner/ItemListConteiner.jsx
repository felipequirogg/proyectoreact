import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'


export const ItemListContainer = ({saludo}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if(categoriaId){
        const queryFilter = query(queryCollection, where('category', '==', categoriaId))
        getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        }else {
            getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
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
