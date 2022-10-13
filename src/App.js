import { useState, useEffect } from "react";
import styles from "./app.module.css";
import { GeneratePassword } from "./components/generate-password";
import { Password } from "./components/password";

export const App = () => {
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else setTheme("dark");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.wrapper}>
        <span
          className={
            theme === "light"
              ? `${styles.theme} ${styles.sun}`
              : `${styles.theme} ${styles.moon}`
          }
          onClick={toggleTheme}
        >
          Switch theme!
        </span>
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

        <GeneratePassword password={password} setPassword={setPassword} />

        <hr className={styles.line} />

        <div className={styles.passwordArea}>
          <Password password={password} />
          <Password password={password} />
        </div>
      </div>
    </div>
  );
};
