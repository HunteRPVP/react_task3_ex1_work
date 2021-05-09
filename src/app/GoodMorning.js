import React from "react";
import { Me } from "./goodmorning/Me";
import { He } from "./goodmorning/He";

export function GoodMorning(props) {
  return (
    <div>
      Good morning, {React.createElement(He, { name: "Alex", age: 27 })} and{" "}
      {React.createElement(Me, { ...props, age: 26 })} Look at the time:{" "}
      {new Date().toLocaleTimeString()}.
    </div>
  );
}
