"use client";
import React, { Fragment, useState } from "react";
import styles from "./Count.module.css";
export const Count = () => {
  const [count, setCount] = useState(0);
  const fnIncrement = () => {
    setCount(count + 1);
  };
  return (
    <Fragment>
      <div data-testid="count" className={styles.clr}>
        Count
      </div>
      <h1>{count}</h1>
      <button onClick={fnIncrement}>Increment</button>
    </Fragment>
  );
};
