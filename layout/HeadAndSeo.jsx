import {NextSeo} from "next-seo";
import Head from 'next/head'

export default function HeadAndSeo({page_title}) {
  const title = page_title ? `Shorty | ${page_title}` : "Shorty"
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/icons/favicon.png"/>
        {/*<title>Check Redirects | URL HTTP Status Code, Redirects, Short Links and more.</title>*/}
      </Head>
      <NextSeo
        title={title}
        description=""
        canonical="https://s.danielms.site/"
        openGraph={{
          url: 'https://s.danielms.site/',
          title: '',
          description: "",
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: ""
            }
          ],
          site_name: "s.danielms.site"
        }}
        twitter={{
            handle: '@dansult',
            site: 's.danielms.site',
            cardType: 'summary_large_image',
          }}
      />
    </>
  )
}
