import Image from "next/image";
import profilePicture from "../../../public/images/profile_picture.jpeg";
import styles from "./styles.module.scss";

export function Profile() {
  return (
    <aside className={styles.Container}>
      <figure className={styles.ImageContainer}>
        <Image src={profilePicture} alt="profile picture" />
        <p>Ismael Oliveira</p>
      </figure>
      <main className={styles.Content}>
        <section className={styles.Formacao}>
          <header className={styles.TitleFormacao}>
            <span>Formação</span>
          </header>
          <p>
            <strong>Curso:</strong>Analise e desenvolvimento de sistemas
          </p>
          <p>
            <strong>Instituição:</strong>
            Faculdade de Tecnologia Impacta
          </p>
        </section>
        <section className={styles.OutrosCursos}>
          <header className={styles.TitleOutrosCursos}>
            <span>Outros cursos</span>
          </header>
          <p>
            <strong>Curso:</strong>GoStack e Ignite
          </p>
          <p>
            <strong>Instituição:</strong> Rocketseat
          </p>
        </section>
        <p>
          <strong>Linkedin:</strong> Linkedin
        </p>
        <p>
          <strong>Github:</strong> Github
        </p>
      </main>
    </aside>
  );
}
