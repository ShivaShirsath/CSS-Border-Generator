import React, { useState } from "react";
import BorderPreview from "./BorderPreview";

function BorderCreator() {
  const [borderWidth, setBorderWidth] = useState(2.5);
  const [borderStyle, setBorderStyle] = useState("solid");
  const [borderColor, setBorderColor] = useState("#000000");
  const [borderRadius, setBorderRadius] = useState(5);

  function handleWidthChange(event) {
    setBorderWidth(event.target.value);
  }

  function handleRaduisChange(event) {
    setBorderRadius(event.target.value);
  }

  function handleStyleChange(event) {
    setBorderStyle(event.target.value);
  }

  function handleColorChange(event) {
    setBorderColor(event.target.value);
  }

  return (
    <column>
      <BorderPreview
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        borderColor={borderColor}
        borderStyle={borderStyle}
      />
      <form>
        <input type="color" value={borderColor} onChange={handleColorChange} />
        <select value={borderStyle} onChange={handleStyleChange}>
          <option value="solid">Solid</option>
          <option value="dashed">Dashed</option>
          <option value="dotted">Dotted</option>
        </select>
        <input
          type={"range"}
          value={borderWidth}
          onChange={handleWidthChange}
          min={0}
          step={0.1}
          max={25}
        />
        <input
          type={"range"}
          value={borderRadius}
          onChange={handleRaduisChange}
          min={0}
          step={0.1}
          max={50}
        />
      </form>
    </column>
  );
}

export default BorderCreator;
