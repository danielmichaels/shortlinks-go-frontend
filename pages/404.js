export default function Error404() {
  return (
    <div className="bg-white">
      <div
        className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2
          className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">404</span>
          <span className="pt-20 block">
            <span className="block">🔎</span>
            Oh Dear!</span>
          <span
            className="block">Whatever you're looking for isn't here </span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
