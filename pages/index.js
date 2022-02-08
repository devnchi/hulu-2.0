import Head from 'next/head'
import AppNav from '../components/AppNav'
import Content from '../components/Content'
import ContentNav from '../components/ContentNav'
import requests from '../utils/requests'

export default function Home({ results }) {
  console.log(results)

  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppNav />
      <ContentNav />
      <Content results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
  }`
) .then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}