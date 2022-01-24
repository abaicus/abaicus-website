import Head from "next/head";

export default function ({title}) {
    return (
        <Head>
            <title>
                Andrei Baicus
                {title ? ` - ${title}` : ''}
            </title>
        </Head>
    )
}
