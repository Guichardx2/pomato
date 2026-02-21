import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="/about">Entenda como funciona a técnica Pomodoro</a>
      <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
      <div>
        <p>Feito por</p>
        <a href="https://github.com/Guichardx2" target="_blank">Guichard</a>
      </div>
    </footer>
  );
};

export default Footer;
