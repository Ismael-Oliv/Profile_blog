import Image from "next/image";
import profilePicture from "../../../public/images/profile_picture.jpeg";
import styles from "./styles.module.scss";

export function Profile() {
  return (
    <aside className={styles.Container}>
      <div className={styles.Image}>
        <figure className={styles.ImageContainer}>
          <Image
            src={profilePicture}
            alt="profile picture"
            className={styles.img}
          />
          <p>Ismael Oliveira</p>
        </figure>
      </div>
      <main className={styles.Content}>
        <section className={styles.Formacao}>
          <header className={styles.TitleFormacao}>
            <span>Formação</span>
          </header>
          <p>
            <strong>Curso:</strong>
            <span>Analise e desenv. de sistemas</span>
          </p>
          <p>
            <strong>Instituição:</strong>
            <span>Fac. de Tecnologia Impacta</span>
          </p>
        </section>
        <section className={styles.OutrosCursos}>
          <header className={styles.TitleOutrosCursos}>
            <span>Outros cursos</span>
          </header>
          <p>
            <strong>Curso:</strong>
            <span>GoStack e Ignite</span>
          </p>
          <p>
            <strong>Instituição:</strong>
            <a href="https://rocketseat.com.br/" target="blank">
              Rocketseat
            </a>
          </p>
        </section>
        <section>
          <p>
            <strong>Linkedin:</strong>
            <a
              href="https://www.linkedin.com/in/ismael-oliveira-4ba833146/"
              target="blank"
            >
              Acessar
            </a>
          </p>
          <p>
            <strong>Github:</strong>
            <a href="https://github.com/Ismael-Oliv" target="blank">
              Acessar
            </a>
          </p>
        </section>
      </main>
    </aside>
  );
}
