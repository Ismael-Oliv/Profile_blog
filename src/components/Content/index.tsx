import { ContentFromNotionProps } from "../../types/contents.types";
import styles from "./styles.module.scss";

interface IContent {
  content: ContentFromNotionProps;
}

export function Content({ content }: IContent) {
  return (
    <a
      href={`/articles/${content.properties.id.title[0].plain_text}`}
      className={styles.container}
    >
      <h3 className={styles.title}>
        {content.properties.title.rich_text[0].plain_text}
      </h3>
      <p className={styles.description}>
        {content.properties.description.rich_text[0].plain_text}
      </p>
      <article className={styles.info}>
        <span>Publicação: {content.created_time}</span>
        <span>Autor: {content.properties.autor.created_by.name}</span>
      </article>
    </a>
  );
}
