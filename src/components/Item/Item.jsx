import React, {useContext} from "react";
import { NavLink } from "react-router-dom";


const Item = ({info}) => {

    return (
        <div className="conjunto">
        <NavLink to={`/item/${info.id}`} className="chocolate">
            <img className="chocolateimg" src={info.image} alt="Chocolates" />
        <p>{info.title}</p>
        <p>${info.price}</p>
        </NavLink>
        </div>
    );
}

export default Item;