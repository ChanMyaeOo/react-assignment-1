import React from "react";
const userInput = props => {
  const style = {
    marginTop: "20px",
    height: "30px",
    padding: "5px"
  };
  return (
    <input
      style={style}
      type="text"
      onChange={props.change}
      value={props.username}
    />
  );
};

export default userInput;
