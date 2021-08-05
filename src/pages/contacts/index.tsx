import styles from "./styles.module.scss";

export default function Contacts() {
  return (
    <main>
      <section className={styles.content}>
        <form action="">
          <h1>Enviar mensagem</h1>
          <div className={styles.title}>
            <h2>Titulo:</h2>
            <input type="text" name="title" />
          </div>

          <div className={styles.email}>
            <h2>Email:</h2>
            <input type="email" name="email" />
          </div>

          <div className={styles.mensagem}>
            <h2>Mensagem:</h2>
            <textarea name="mensagem" cols={1} rows={10} />
          </div>
          <div className={styles.button}>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </section>
    </main>
  );
}
