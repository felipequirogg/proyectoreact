import React from "react";

export const ItemDetail = ({data}) => {
    return(
        <div className="conjunto">
        <div>
            <img className="chocolateimg" src={data.image} alt="" />
            <div>
                <h1 className="chocolate">{data.title}</h1>
            </div>
        </div>
        </div>
    );
}

export default ItemDetail;