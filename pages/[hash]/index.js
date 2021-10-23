import {axiosShortLink} from "../../lib/axiosHandler";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {toast} from "react-toastify";

const RetrieveShortLink = () => {
  const Router = useRouter()
  const {hash} = Router.query

  useEffect(() => {
    if (!Router.isReady) return;
    if (!hash) return;
    getLink()
  }, [Router.isReady, Router.query])
  const getLink = async () => {
    try {
      const resp = await axiosShortLink(hash)
      let link = resp.link.original_url
      toast.success(`${resp.link.original_url} found. Redirecting...`)

      // If the URL has no scheme prefix (e.g., http:// or https://), assume
      // that it's a plaintext http URL.
      if (!/^[a-z0-9]+:\/\//.test(link)) {
        link = "http://" + link
      }

      window.location.replace(link)
    } catch (error) {
      toast.error('domain does not exist. Redirecting...')
      await Router.push("/404")
    }
  }


  return (
    <div className="">
      redirecting!
     </div>
  )
}
export default RetrieveShortLink

