import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <Link href="/">
              <a>Pagina Inicial</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a>Perfil</a>
            </Link>
          </li>
          <li>
            <Link href="/articles">
              <a>Artigos</a>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <a>Contate-me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
