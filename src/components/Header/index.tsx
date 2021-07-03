import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <a href="http://localhost:3000/">Home</a>
          </li>
          <li>
            <a href="http://localhost:3000/profile">Profile</a>
          </li>
          <li>
            <a href="http://localhost:3000/articles">Articles</a>
          </li>
          <li>
            <a href="http://localhost:3000/contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
