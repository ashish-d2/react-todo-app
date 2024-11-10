import { ReactComponent as MoonIcon } from "./../../assets/images/icon-moon.svg";
import styles from "./Header.module.scss";

const Header = function () {
  return (
    <div className={styles.header_container}>
      <h1>TODO</h1>
      <MoonIcon />
    </div>
  );
};

export default Header;
