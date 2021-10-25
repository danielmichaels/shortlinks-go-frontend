import {useRouter} from "next/router";
import {useEffect} from "react";
import {toast} from "react-toastify";
import HeadAndSeo from "../../layout/HeadAndSeo";
import {config} from "../../config";

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
      let link = `${config.url.API_URL}/links/${hash}`

      window.location.replace(link)
    } catch (error) {
      toast.error('domain does not exist. Redirecting...')
      await Router.push("/404")
    }
  }


  return (
    <div className="">
      <HeadAndSeo page_title={`Redirecting`} />
      redirecting!
     </div>
  )
}
export default RetrieveShortLink

