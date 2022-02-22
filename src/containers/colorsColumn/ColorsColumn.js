import React, { useState } from "react";
import { ColorCircle } from "../../components";
import "./colorsColumn.scss";
function ColorsColumn(props) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="colorsColumn">
      {props.verticalColors.map((item,index) => (
        <div key={index}
          className={item.id === selected ? "selected" : ""}
          onClick={() => {
            props.onSelectingColor(item);
            setSelected(item.id);
          }}
        >
          <ColorCircle color={item.color} />
        </div>
      ))}
    </div>
  );
}

export default ColorsColumn;
