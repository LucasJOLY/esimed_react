import React, { Fragment, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count == 100) {
      return;
    }
    setCount(count + 1);
  };

  const decrement = () => {
    if (count == 0) {
      return;
    }
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <Fragment>
      <h1>Le compteur est à {count}</h1>
      <button onClick={increment}>Ajouter 1 au compteur</button>
      <button onClick={decrement}>Enlever 1 au compteur</button>
      <button onClick={reset}>Reset le compteur</button>
    </Fragment>
  );
}

export default Counter;
