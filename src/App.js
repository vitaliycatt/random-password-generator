import styles from './app.module.css'

export const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Generate a{' '}
          <span className={styles.highlightedTitle}>random password</span>
        </h1>
        <p className={styles.description}>
          Never use an insecure password again.
        </p>
        <button className={styles.button}>Generate passwords</button>
        <hr className={styles.line} />
        <div className={styles.entryField}>
          <div className={styles.passwordField}>
            <input type='text' className={styles.password} />
          </div>
          <div className={styles.passwordField}>
            <input type='text' className={styles.password} />
          </div>
        </div>
      </div>
    </div>
  )
}
