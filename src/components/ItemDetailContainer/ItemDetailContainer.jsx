import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


const choco = { id: 1, image: "https://us.123rf.com/450wm/lugreg/lugreg1302/lugreg130200049/18090315-bolas-de-chocolate-en-un-fondo-blanco-.jpg?ver=6", title: "Bolitas de chocolate"};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(chocolates);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])
    
    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;