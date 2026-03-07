import { Link } from "@tanstack/react-router";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/about">Entenda como funciona a técnica Pomodoro</Link>
      <Link to="">Chronos Pomodoro &copy; {new Date().getFullYear()}</Link>
      <div>
        <p>Feito por</p>
        <Link to="https://github.com/Guichardx2" target="_blank">Guichard</Link>
      </div>
    </footer>
  );
};

export default Footer;
