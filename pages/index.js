import Shorten from "../components/Shorten";
import Footer from "../components/Footer";
import HeadAndSeo from "../layout/HeadAndSeo";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <HeadAndSeo page_title={`Home`} />
      <main
        className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold pt-5">
          {/*Welcome to{' '}*/}
          {/*<span className="text-blue-600">*/}
          {/*  Shorty Links!*/}
          {/*</span>*/}
          Tars.Run{" "}<br/>
          <span className="text-left text-yellow-400 pt-2">⠞⠁⠗⠎</span>
        </h1>
        <section className="w-full">
          <Shorten/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
