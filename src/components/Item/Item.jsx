import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({info}) => {
    return (
        <div className="conjunto">
        <NavLink to='/item/:id' className="chocolate">
            <img className="chocolateimg" src={info.image} />
        <p>{info.title}</p>
        </NavLink>
        </div>
    );
}

export default Item;