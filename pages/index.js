import Head from 'next/head'
import Shorten from "../components/Shorten";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shorty Links</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main
        className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <span className="text-blue-600">
            Shorty Links!
          </span>
        </h1>
        <section className="w-full">
        <Shorten/>
      </section>


      </main>


      <footer
        className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2"/>
        </a>
      </footer>
    </div>
  )
}
