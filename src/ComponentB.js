import React from "react";
import { useStateValue } from "./StateProvider";
import "./ComponentB.css";

function ComponentB() {
  const [{ countA, countB, countC, countD }, dispatch] = useStateValue();

  return (
    <div>
      <div className="Counters">
        <h3>Counter A :{countA}</h3>
        <h3>Counter B :{countB}</h3>
        <h3>Counter C :{countB}</h3>
        <h3>Counter D :{countB}</h3>
      </div>
    </div>
  );
}

export default ComponentB;
