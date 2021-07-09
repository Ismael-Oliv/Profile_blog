import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
          <li>
            <Link href="/articles">
              <a>Articles</a>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <a>Contacts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
