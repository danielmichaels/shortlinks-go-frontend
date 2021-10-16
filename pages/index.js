import Head from 'next/head'
import Shorten from "../components/Shorten";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
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
      <Footer/>
    </div>
  )
}
