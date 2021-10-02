import {axiosShortLink} from "../lib/axiosHandler";
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
      toast.success(`${resp.result} found. Redirecting...`)
      window.location.assign(resp.result)
    } catch (error) {
      toast.error('domain does not exist. redirecting...')
      await Router.push("/404")
    }
  }
  return (
    <div className="">
    </div>
  )
}

export default RetrieveShortLink
