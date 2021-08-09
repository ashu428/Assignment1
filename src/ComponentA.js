import React, { useEffect } from "react";
import ComponentB from "./ComponentB";
import { useStateValue } from "./StateProvider";

function ComponentA() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    setInterval(() => {
      dispatch({ type: "INCREASE" });
    }, 1000);
  }, []);

  return (
    <div>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
