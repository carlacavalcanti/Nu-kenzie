import logo from "../../assets/Nu Kenzie.png";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Nu Kanzie" />
      </div>
    </header>
  );
};
