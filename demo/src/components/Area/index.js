import React from "react";

const Area = (props) => {
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    console.log(card_id);
    const card = document.getElementById(card_id);
    console.log(card);
    card.style.display = "block";

    e.target.appenChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h3
        style={{
          backgroundColor: "#626e80",
          textAlign: "left",
          color: "#ffffff",
        }}
      >
        Khu vực 1
      </h3>
      <div
        className={props.className}
        id={props.id}
        onDrop={drop}
        onDragOver={dragOver}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Area;
