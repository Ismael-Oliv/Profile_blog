import { GetStaticProps } from "next";
import { Client } from "@notionhq/client";

import { Profile } from "../components/Profile";
import { Content } from "../components/Content";

import styles from "../../styles/home.module.scss";

import { ContentFromNotionProps } from "../types/contents.types";

interface IHomeProps {
  content: ContentFromNotionProps[];
}

export default function Home({ content }: IHomeProps) {
  return (
    <div className={styles.container}>
      <main className="main">
        <div className={styles.content}>
          <div>
            <Profile />
            <main className={styles.feed}>
              {content.map((page) => {
                return <Content key={page.id} content={page} />;
              })}
            </main>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const notion = new Client({
    auth: process.env.SECRET_NOTION_API,
  });

  const response = await notion.databases.query({
    database_id: process.env.SECRET_NOTION_DATABASE_ID,
  });

  const content: any[] = [];
  response.results.map((page) => {
    content.push({ ...page, parent: "" });
  });

  return {
    props: {
      content,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
