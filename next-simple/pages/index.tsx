import type { NextPage } from "next";
import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
const Home: NextPage = () => {
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
        <h2>Intro</h2>
        <ul></ul>
      </section>
    </div>
  );
};

export default Home;
