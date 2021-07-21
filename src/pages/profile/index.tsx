import styles from "./style.module.scss";

export default function Profile() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div >
          <h1>Experiência de Trabalho</h1>
          <section className={styles.expirence}>
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
          <div className={styles.formation}>
            <header>
              <h3>Formação</h3>
            </header>
            <section>
              <article>
                <h2>Faculdade de Técnologia Impacta</h2>
                <p>Analise e Desenvolvimento de Sistemas | conclusão 07/2022</p>
                <ul>
                  <li>Desenv. web: 10</li>
                  <li>POO: 9</li>
                  <li>SQL: 9</li>
                </ul> 
              </article>
            </section>
            <section>
              <article>
                <h2>RocketSeat</h2>
                <p>GoStack 14 - Desenvolv. web FullStack | conclusão 12/2020</p>
                <ul>
                  <li>Node js: 100%</li>
                  <li>React js: 100%</li>
                  <li>React Native: 100%</li>
                  <li>Desafios: 100%</li>
                </ul> 
              </article>
            </section>
          </div>
          <div className={styles.Hobbs}>
            <header>
              <h3>Hobbs</h3>
            </header>
            <section>
              <article>
                <ul>
                  <li>Estudar programação</li>
                  <li>Caminhar</li>
                </ul> 
              </article>
            </section>
          </div>
          <div className={styles.Hobbs}>
            <header>
              <h3>Linguagens de Programação</h3>
            </header>
            <section>
              <article>
                <ul>
                  <li>Javascript</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>VBA-Excel</li>
                </ul> 
              </article>
            </section>
          </div>
          <div className={styles.Hobbs}>
            <header>
              <h3>Caracteristicas</h3>
            </header>
            <section>
              <article>
                <ul>
                  <li>
                    <a 
                      href="https://app.mindsight.com.br/devolutiva/cf7280ce-c3c8-43dd-b7cb-465d92a4a378/" target="blank">
                        Mind 
                    </a>
                  </li>
                </ul> 
              </article>
            </section>
          </div>
        </aside>
      </div>
    </main>
  );
}
