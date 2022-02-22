import React, { useState, useEffect } from "react";
import { ColorCircle } from "../../components";
import "./fourCircle.scss";
const colorsObject2 = [
  {
    id: 1,
    color: "transparent",
  },
  {
    id: 2,
    color: "transparent",
  },
  {
    id: 3,
    color: "transparent",
  },
  {
    id: 4,
    color: "transparent",
  },
];

function FourCirlce(props) {
  const { colorsObject } = props;

  return (
    <div className="fourCircle">
      {colorsObject.map((item, index) => (
        <div key={index}
          onClick={() => {
            props.onPress(item.id);
          }}
        >
          <ColorCircle color={item.color} />
        </div>
      ))}
    </div>
  );
}

export default FourCirlce;
