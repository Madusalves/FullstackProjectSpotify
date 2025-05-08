import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import SingleItem from "./singleItem";

const ItemList = ({title, items}) => {
    //const { title } = props; // Destructuring the title prop

const itemCount = items === 5 ? 5 : 10;
return (
    <div className="item-list">
        <div className="item-list__header">
            <h2>{title} Populares</h2>
            <a className="item-list__link" href="/">
                Mostrar tudo
            </a>
        </div>
        <div className="item-list__container">
            {/* Array.from = .map */}
            {Array.from({ length: itemCount }, (_, idx) => <SingleItem key={idx} />)}
        </div>
    </div>
);
}

export default ItemList;