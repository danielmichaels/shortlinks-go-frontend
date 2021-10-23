import {NextSeo} from "next-seo";
import Head from 'next/head'

const domain = process.env.DOMAIN_NAME
export default function HeadAndSeo({page_title}) {
  const title = page_title ? `Shorty | ${page_title}` : "Shorty"
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/icons/favicon.png"/>
      </Head>
      <NextSeo
        title={title}
        description=""
        canonical=domain
        openGraph={{
          url: domain,
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
          site_name: domain,
        }}
        twitter={{
            handle: '@dansult',
            site: domain,
            cardType: 'summary_large_image',
          }}
      />
    </>
  )
}
