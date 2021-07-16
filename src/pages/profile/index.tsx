import styles from "./style.module.scss";

export default function Profile() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.expirence}>
          <h1>Experiência de Trabalho</h1>
          <section>
            <header>
              <h2>Desenvolvedor junior</h2>
              <span>Consiste soluções</span>
              <time>2020/2021</time>
            </header>
            <ul>
              <li>Desenvolver sistema desktop para ressarcimento de imposto</li>
              <li>Desenvolver sistema para automatização de processos</li>
            </ul>
          </section>
        </div>
        <aside className={styles.profile}>
          <div>
            <header>
              <span>Formação</span>
            </header>
          </div>
        </aside>
      </div>
    </main>
  );
}
