import styles from "./theme-toggler.module.css";

export const ThemeToggler = ({ toggleTheme, theme, setTheme }) => {
  return (
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
  );
};
