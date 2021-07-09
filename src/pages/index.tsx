import { GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";

import { Profile } from "../components/Profile";
import { Category } from "../components/Category";

import styles from "../../styles/home.module.scss";

interface ICategory {
  id: string;
  slug: string;
  title: string;
}

interface IHomeProps {
  Categories: ICategory[];
}

export default function Home({ Categories }: IHomeProps) {
  return (
    <div className={styles.container}>
      <main className="main">
        <div className={styles.content}>
          <div>
            <Profile />
            <main className={styles.feed}>
              {Categories.map((category) => {
                return <Category key={category.id} Category={category} />;
              })}
            </main>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "categories")],
    {
      fetch: ["Categories.title"],
      pageSize: 100,
    }
  );

  const Categories = response.results.map((cont) => {
    return {
      id: cont.id,
      slug: cont.uid,
      title: cont.uid[0].toUpperCase() + cont.uid.substr(1),
    };
  });

  return {
    props: { Categories },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
