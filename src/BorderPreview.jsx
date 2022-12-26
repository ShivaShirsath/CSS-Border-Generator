import React from "react";

function BorderPreview({
  borderWidth,
  borderRadius,
  borderStyle,
  borderColor,
  className,
}) {
  const previewStyles = {
    borderWidth: borderWidth + "vmin",
    borderStyle: borderStyle,
    borderColor: borderColor,
    borderRadius: borderRadius + "vmin",
  };

  return (
    <div
      id="preview"
      onClick={() =>
        prompt(
          "Copy this Code",
          `border: ${borderWidth}vmin ${borderStyle} ${borderColor}; border-radius: ${borderRadius}vmin;`
        )
      }
    >
      <div style={previewStyles} className={className}>
        <button>COPY</button>
      </div>
    </div>
  );
}

export default BorderPreview;
