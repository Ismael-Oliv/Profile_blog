import { Client } from "@notionhq/client";
import styles from "./styles.module.scss";

export default function Page({ content }) {
  return (
    <main className={styles.main}>
      <section>
        {content.map((cont) => {
          return <p key={cont.paragraph}>{cont.paragraph}</p>;
        })}
      </section>
    </main>
  );
}

export async function getStaticPaths() {
  const notion = new Client({
    auth: process.env.SECRET_NOTION_API,
  });

  const response = await notion.databases.query({
    database_id: process.env.SECRET_NOTION_DATABASE_ID,
  });

  const paths = response.results.map((page) => {
    return {
      params: { slug: page.properties.id.title[0].plain_text },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const content = [];
  const notion = new Client({
    auth: process.env.SECRET_NOTION_API,
  });

  const response = await notion.blocks.children.list({
    block_id: slug,
    page_size: 100,
  });

  response.results.map((page) => {
    if (page.paragraph) {
      if (page?.paragraph.text.length > 0)
        content.push({ paragraph: page?.paragraph.text[0]?.plain_text });
    }
  });
  return {
    props: {
      content,
    },
    revalidate: 60 * 60, // 24 horas
  };
}
