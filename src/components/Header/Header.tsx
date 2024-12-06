import { ReactComponent as MoonIcon } from "./../../assets/images/icon-moon.svg";
import { ReactComponent as SunIcon } from "./../../assets/images/icon-sun.svg";
import styles from "./Header.module.scss";

// imports
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Header = function () {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.header_container}>
      <h1>TODO</h1>

      <button className={styles.btn} onClick={() => toggleTheme()}>
        {theme === "light" ? (
          <MoonIcon className={styles.header_icon} />
        ) : (
          <SunIcon className={styles.header_icon} />
        )}
      </button>
    </div>
  );
};

export default Header;
