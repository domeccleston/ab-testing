import Head from "../components/Head";
import Main from '../components/Main';
import Nav from "../components/Nav";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head />
      <div className={styles.container}>
        <Nav />
        <Main />
      </div>
    </>
  );
}
