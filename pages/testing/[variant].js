import { BUCKETS } from "../../lib/buckets";

import Head from "../../components/Head";
import Main from '../../components/Main';
import Nav from "../../components/Nav";
import Tooltip from "../../components/Tooltip";

export default function Variant({ variant, content }) {
  return (
    <>
      <Head />
        <Nav />
        <Main {...content} />
        <Tooltip variant={variant} />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: BUCKETS.map((variant) => ({ params: { variant } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { variant } = params;
  const content = await import('../../lib/cms.json');
  return { props: { content: content[variant], variant } };
}
