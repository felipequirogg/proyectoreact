import React from "react";

const Item = ({info}) => {
    return (
        <div className="conjunto">
        <a href='../' className="chocolate">
            <img className="chocolateimg" src={info.image} />
        <p>{info.title}</p>
        </a>
        </div>
    );
}

export default Item;