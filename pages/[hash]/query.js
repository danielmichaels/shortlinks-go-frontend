import {getLinkQuery} from "../../lib/axiosHandler";
import {useRouter} from "next/router";
import QueryTable from "../../components/QueryTable";

const LinkQuery = () => {
  const Router = useRouter()
  const {hash} = Router.query

  const {data, isLoading, isError} = getLinkQuery(hash)
  if (!data) {
    return (
      <div>
        loading...
      </div>
    )
  }

  // if (!data) {
  //   return (
  //     <div>Error retrieving data</div>
  //   )
  // }
  return (
    <div>
      <div
        className="py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 min-w-full max-w-xl sm:mx-auto">
          <QueryTable data={data.data}/>
        </div>
      </div>
    </div>
  )
}

export default LinkQuery
