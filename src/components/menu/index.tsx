import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

type Themes = "light" | "dark";

const Menu = () => {
  const [theme, setTheme] = useState<Themes>(() => {
    return (localStorage.getItem("theme") as Themes) || "dark";
  });

  const themIcon = {
    light: <MoonIcon size={24} />,
    dark: <SunIcon size={24} />,
  }

  function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <Link
        to="/"
        className={styles.menuLink}
        aria-label="Ir para a home"
        title="Ir para a home"
      >
        <HouseIcon size={24} />
      </Link>
      <Link
        to="#"
        className={styles.menuLink}
        aria-label="Ir para o histórico"
        title="Ir para o histórico"
      >
        <HistoryIcon size={24} />
      </Link>
      <Link
        to="#"
        className={styles.menuLink}
        aria-label="Ir para as configurações"
        title="Ir para as configurações"
      >
        <SettingsIcon size={24} />
      </Link>
      <Link
        to="#"
        className={styles.menuLink}
        aria-label="Alternar tema"
        title="Alternar tema"
        onClick={handleThemeChange}
      > 
      {
        themIcon[theme]
      } 
      </Link>
    </nav>
  );
};

export default Menu;
