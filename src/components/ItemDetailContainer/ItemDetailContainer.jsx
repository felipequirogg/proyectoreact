import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const chocolates = [
    { id: 1, image: "https://image.eatencdn.com/image/c3153ece-1ed2-44e8-9ccf-fe831b08283d/medium/image.jpg", title: "Chocolate en rama", category: 'chocolates'},
    { id: 2, image: "https://p4.wallpaperbetter.com/wallpaper/397/735/587/chocolate-white-background-chips-wallpaper-preview.jpg", title:"Barra de chocolate", category: 'chocolate'},
    { id: 3, image: "https://frantom.com.ar/wp-content/uploads/2019/01/06_Mix.jpg", title: "Chocolates rellenos", category: 'chocolates'},
    { id: 4, image: "https://us.123rf.com/450wm/farion25/farion251704/farion25170400235/77580293-cubos-de-chocolate-en-el-mont%C3%B3n-pedazos-de-barra-de-chocolate-amargo-oscuro-aislado-en-el-fondo-blan.jpg", title:"Chocolate de fabrica", category: 'chocolate'},
];


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