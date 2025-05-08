import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import ItemList from "./itemList";

const Main = () => {
  return (
    <div className="main">
      {/*Artist*/}
      <ItemList title="Artistas" items={5}/>

      {/*Music*/}
      <ItemList title="Musicas" items={10}/>
    </div>
  );
};

export default Main;
