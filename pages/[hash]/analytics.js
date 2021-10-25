import {getLinkAnalytics} from "../../lib/axiosHandler";
import {useRouter} from "next/router";
import QueryTable from "../../components/QueryTable";
import LoadingComponent from "../../components/LoadingComponent";
import HeadAndSeo from "../../layout/HeadAndSeo";

const Analytics = () => {
  const Router = useRouter()
  const {hash} = Router.query

  const {data, isLoading, isError} = getLinkAnalytics(hash)
  if (isLoading) {
    return (
      <div>
        <div
          className="py-6 flex flex-col text-center justify-center sm:py-12">
          <div className="relative py-3 min-w-full max-w-xl sm:mx-auto">
            <LoadingComponent isLoading={true}/>
          </div>
        </div>
      </div>
    )
  }
  if (isError) {
    return (
      <div>Error occurred</div>
    )
  }

  return (
    <div>
      <HeadAndSeo page_title={`Analytics`} />
      <div
        className="py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 min-w-full max-w-xl sm:mx-auto">
          {data ?
            <QueryTable linkData={data}/>
            : <><p>No data to display</p></>}
        </div>
      </div>
    </div>
  )
}

export default Analytics
