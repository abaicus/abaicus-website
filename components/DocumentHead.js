import Head from "next/head";

export default function ({ title }) {
  return (
    <Head>
      <link rel="shortcut icon" href="/images/favicon.jpg" />
      <title>
        Andrei Baicus
        {title ? ` - ${title}` : ""}
      </title>
    </Head>
  );
}
