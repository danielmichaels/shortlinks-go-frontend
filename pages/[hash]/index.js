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
      const link = resp.link.original_url
      toast.success(`${resp.link.original_url} found. Redirecting...`)
      window.location.replace(`//${link}`)
      // replace needs // in front to redirect correctly
      // more details: https://stackoverflow.com/a/40368867/9163110
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

