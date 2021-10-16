import {useCallback, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {createShortLink} from "../lib/axiosHandler";
import {getValue, setValue} from "../lib/localStorage";
import ShortenLinkTableLocalStorage from "./ShortenLinkTableLocalStorage";


const appendLocalStorageHashes = (resp) => {
  const LSObject = {
    short_url: resp.short_url,
    hash: resp.link.hash,
    long_url: resp.link.original_url
  }
  const allLS = getValue("hashes", '') || [];
  allLS.push(LSObject)
  setValue("hashes", allLS)
  console.log('set values', getValue("hashes"))
}

export default function Shorten() {
  const [links, setLinks] = useState( []);

  useEffect(()=> {
    setLinks(getValue("hashes"))
  }, [])

  const handleSubmit = useCallback((event) => {
    // todo: validate that only a valid URL is accepted
    event.preventDefault()
    const link = event.target.link.value
    createLink(link)
  }, [])

  const createLink = async (link) => {
    try {
      const resp = await createShortLink({link: link})
      toast.success(`${link} shortened successfully`)
      appendLocalStorageHashes(resp)
      setLinks(getValue("hashes")) // this updates the table
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div
      className="py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 w-11/12 max-w-xl sm:mx-auto">
        <div
          className="relative bg-gray-50 p-8 bg-white shadow-sm sm:rounded-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="mt-1">
                <input
                  id="link"
                  name="link"
                  type="text" // need to validate url only
                  placeholder="Shorten link"
                  autoComplete="link"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="pt-0">
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className=" justify-center py-2 px-5 w-full lg:w-1/3 md:w-3/4 xl:w-1/2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Shorten
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
       <section>
         <h2 className="text-2xl font-bold">
           Previous{' '}
           <span className="text-blue-600">
            Shorty Links
          </span>
         </h2>
        <ShortenLinkTableLocalStorage links={links} />
      </section>
    </div>
  )
}
