import Image from "next/image";
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.message}>
        <h1>Olá! Senti Saudades 😁</h1>
        <h2>Sua carteira está esperando por você</h2>
      </div>

      <div className={styles.avatar}>
        <Image src="/avatar.png" alt="avatar" layout="fill" />
      </div>
    </section>
  );
};

export default Header;
