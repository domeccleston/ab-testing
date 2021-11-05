import Head from "../components/Head";
import Main from "../components/Main";
import Nav from "../components/Nav";

export default function Home(props) {
  return (
    <>
      <Head />
      <Nav />
      <Main {...props} />
    </>
  );
}

export async function getStaticProps() {
  const content = await import('../lib/cms.json');
  return {
    props: content['A']
  }
}