import {toast} from "react-toastify";
import Link from "next/link"

export default function ShortenLinkTableLocalStorage({links}) {

  return (
    <div className="flex flex-col justify-center">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div
          className="py-2 align-middle inline-block sm:px-6 lg:px-8">
          <div
            className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            {links.length ?
              <>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Original URL
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Short Url
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Copy Link
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Analytics
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  {links.reverse().map((link, linkIdx) => (
                    <tr key={link.hash}
                        className={linkIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <p className="truncate w-80">
                          {link.long_url}
                        </p>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <a href={link.short_url}
                           className="text-indigo-600 hover:text-indigo-900">
                          {link.short_url}
                        </a>
                      </td>
                      <td
                        onClick={() => {
                          navigator.clipboard.writeText(link.short_url)
                          toast.info("Copied to clipboard", {position: toast.POSITION.BOTTOM_CENTER})
                        }}
                        className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#"
                           className="text-indigo-600 hover:text-indigo-900">
                          COPY
                        </a>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href={`${link.short_url}/analytics`}
                           className="text-indigo-600 hover:text-indigo-900">
                          <Link href={`${link.short_url}/analytics`}>
                            Link
                          </Link>
                        </a>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </>
              :
              <>

                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Original URL
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Short Url
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Copy Link
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Analytics
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <p className="truncate w-80">
                        https://danielms.site
                      </p>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a href="https://danielms.site"
                         className="text-indigo-600 hover:text-indigo-900">
                        https://tars.run/demoLink
                      </a>
                    </td>
                    <td
                      onClick={() => {
                        toast.warn("Nothing copied to clipboard. This is just a demo - enter your own links to get started",
                          {position: toast.POSITION.BOTTOM_CENTER})
                      }}
                      className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#"
                         className="text-indigo-600 hover:text-indigo-900">
                        COPY
                      </a>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href={`/demoLink/analytics`}
                         onClick={() => toast.warn("This is just a demo. Create a your own links to view analytics",
                           {position: toast.POSITION.BOTTOM_CENTER})}
                         className="text-indigo-600 hover:text-indigo-900">
                        <Link href="#">
                          Link
                        </Link>
                      </a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
