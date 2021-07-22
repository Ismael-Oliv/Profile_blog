import Prismic from "@prismicio/client";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";
import { NoContent } from "../../components/NoContent"

import styles from "./posts.module.scss";

interface IPosts {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  updated_at: string;
}

interface IPostsProps {
  posts: IPosts[];
}

export default function Posts({ posts }: IPostsProps) {
  return (
    <main className={styles.main}>
      <section className={styles.section}>

        {posts[0] ?
          posts.map((post) => (
            <Link key={post.id} href={`articles/${post.slug}`}>
              <a className={styles.article}>
                <header>
                  <h1>{post.title}</h1>
                  <time>{post.updated_at}</time>
                </header>
                <article>
                  <p>{post.excerpt}</p>
                </article>
              </a>
            </Link>
          )):
          <NoContent /> 
        }
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;
  const tags = String(slug);

  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at("document.tags", [tags]),
  ]);
  const posts = response.results.map((cont) => {
    return {
      id: cont.id,
      slug: cont.uid,
      title: RichText.asText(cont.data.title),
      excerpt:
        cont.data.content.find((content) => content.type === "paragraph")
          ?.text ?? "",
      updated_at: new Date(cont.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: { posts },
  };
};
