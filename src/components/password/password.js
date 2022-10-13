import { useRef } from "react";
import styles from "./password.module.css";

export const Password = ({ password }) => {
  const inputPass = useRef("");
  return (
    <input
      type="text"
      value={password}
      className={styles.password}
      ref={inputPass}
    />
  );
};
