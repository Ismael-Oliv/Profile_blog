import { GetStaticProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../../services/prismic";

import styles from "./styles.module.scss";

interface IPosts {
  id: string;
  slug: string;
  title: string;
  content: string;
  updated_at: string;
}

interface IPostsProps {
  content: IPosts;
}

export default function Posts({ content }: IPostsProps) {
  return (
    <>
      <Head>
        <title>{content.title} | Ignews</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{content.title}</h1>
          <time>{content.updated_at}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID("posts", String(slug), {});

  const content = {
    id: response.id,
    slug: response.uid,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updated_at: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: { content },
  };
};
