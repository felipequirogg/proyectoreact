import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const chocolates = [
    { id:1, image: "https://image.eatencdn.com/image/c3153ece-1ed2-44e8-9ccf-fe831b08283d/medium/image.jpg", title: "Chocolate en rama"},
    { id:2, image: "https://p4.wallpaperbetter.com/wallpaper/397/735/587/chocolate-white-background-chips-wallpaper-preview.jpg", title:"Barra de chocolate"},
    { id:3, image: "https://frantom.com.ar/wp-content/uploads/2019/01/06_Mix.jpg", title: "Chocolates rellenos"},
];



export const ItemListContainer = ({saludo}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(chocolates);
            }, 3000);
        });
        getData.then(res => setData(res))
    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        <>
        <h2 className="productos">{saludo}</h2>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        <ItemList data = {data} />
        </>
    );
}

export default ItemListContainer;