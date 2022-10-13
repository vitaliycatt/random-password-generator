import styles from "./password.module.css";

export const Password = ({ setCopy, password, inputRef }) => {
  return (
    <input
      type="text"
      ref={inputRef}
      value={password}
      className={styles.password}
      onClick={() => {
        setCopy(inputRef.current.value);
        navigator.clipboard.writeText("copy");
      }}
    />
  );
};
