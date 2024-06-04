import React from "react";

const Scroll = (props) => {
  const { children } = props;
  return (
    <div
      style={{
        overflowY: "scroll",
        border: `5px solid black`,
        height: "800px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
