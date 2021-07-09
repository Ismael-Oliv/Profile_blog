import { ContentFromNotionProps } from "../../types/contents.types";
import Link from "next/link";
import styles from "./styles.module.scss";

interface ICategory {
  id: string;
  slug: string;
  title: string;
}

interface IContent {
  Category: ICategory;
}
export function Category({ Category }: IContent) {
  return (
    <Link href={`/posts/${Category.slug}`}>
      <a className={styles.container}>
        <h3 className={styles.title}>{Category.title}</h3>
      </a>
    </Link>
  );
}
