import Shorten from "../components/Shorten";
import Footer from "../components/Footer";
import HeadAndSeo from "../layout/HeadAndSeo";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <HeadAndSeo page_title={`Home`} />
      <main
        className="flex flex-col items-center justify-center sm:w-full flex-1 lg:px-20 text-center">
        <h1 className="text-6xl font-bold pt-5">
          Tars.Run{" "}<br/>
          <span className="text-left text-yellow-400 pt-2">⠞⠁⠗⠎</span>
        </h1>
        <p className="pt-2">A dead simple, hobbyist, no guarantees URL shortener</p>
        <section className="w-full">
          <Shorten/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
