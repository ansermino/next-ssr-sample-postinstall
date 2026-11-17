import { capitalize } from "lodash";

export async function getServerSideProps() {
  return { props: { greeting: capitalize("hello"), t: Date.now() } };
}

export default function Home({ greeting, t }) {
  return <main><h1>{greeting}</h1><p>Rendered at {t}</p></main>;
}
