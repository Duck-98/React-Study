import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import homeStyles from "../styles/Home.module.css";
const Home: NextPage = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
  return (
    <div>
      <Head>
        <title>Duck</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Introduction]</p>
        <p>[this is a website]</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}> Intro</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ title, date, id }) => (
            <li className={homeStyles.listItem} key={id}>
              <a>{title}</a>
              <br />
              <small className={homeStyles.lightNext}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
