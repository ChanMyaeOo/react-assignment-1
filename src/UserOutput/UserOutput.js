import React from "react";
const userOutput = props => {
  const style = {
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #ccc",
    width: "40%",
    margin: "20px auto"
  };
  return (
    <div style={style}>
      <p>Username : {props.username} </p>
      <p>Password: {props.password} </p>
    </div>
  );
};

export default userOutput;
