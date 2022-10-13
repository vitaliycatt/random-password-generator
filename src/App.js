import { useState, useRef } from "react";
import styles from "./app.module.css";
import { GeneratePassword } from "./components/generate-password";
import { Password } from "./components/password";
import { ThemeToggler } from "./components/theme-toggler";

export const App = () => {
  const [copy, setCopy] = useState("");
  const [lengthCount, setLengthCount] = useState(8);
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [theme, setTheme] = useState("dark");
  const inputRef = useRef(null);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else setTheme("dark");
  };

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.wrapper}>
        <ThemeToggler
          toggleTheme={toggleTheme}
          theme={theme}
          setTheme={setTheme}
        />
        <h1 className={styles.title}>
          Generate a{" "}
          <span className={styles.highlightedTitle}>random password</span>
        </h1>
        <p
          className={
            theme === "light"
              ? `${styles.description} ${styles.paragraphLight}`
              : styles.description
          }
        >
          Never use an insecure password again.
        </p>

        <div className={styles.passSwitcherWrapper}>
          <GeneratePassword
            setFirstPassword={setFirstPassword}
            setSecondPassword={setSecondPassword}
            lengthCount={lengthCount}
          />

          <input
            type="number"
            value={lengthCount}
            placeholder="Length count"
            className={styles.lengthCount}
            onChange={(e) => {
              console.log(e.target.value);
              setLengthCount(e.target.value);
            }}
          />
        </div>

        <hr className={styles.line} />
        <div className={styles.passwordArea}>
          <Password
            setCopy={setCopy}
            inputRef={inputRef}
            password={firstPassword}
          />
          <Password
            setCopy={setCopy}
            password={secondPassword}
            inputRef={inputRef}
          />
        </div>
      </div>
    </div>
  );
};
