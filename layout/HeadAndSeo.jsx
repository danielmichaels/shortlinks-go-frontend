import {NextSeo} from "next-seo";
import Head from 'next/head'

const domain = process.env.DOMAIN_NAME
export default function HeadAndSeo({page_title}) {
  const title = page_title ? `Tars.run | ${page_title}` : "Tars.run"
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/icons/favicon.ico"/>
      </Head>
      <NextSeo
        title={title}
        description="A simple no-frills URL shortener for hobbyists. Open-source and free to use."
        canonical={domain}
        openGraph={{
          url: domain,
          title: 'Tars.run',
          description: "A simple no-frills URL shortener",
          images: [
            {
              url: '/banner.png',
              width: 800,
              height: 600,
              alt: "Tars.run is a dead simple URL shortener"
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
