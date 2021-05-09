import React from "react";

function Sum(a, b) {
  return a + b;
}

function Inc(x) {
  x += "x";
  return x;
}

export function Me(props) {
  const age = Sum(parseInt(props.age), 1);
  const age2 = Inc(props.age);
  return (
    <h1>
      {props.name} {props.age} ({age} - {age2})!
    </h1>
  );
}
