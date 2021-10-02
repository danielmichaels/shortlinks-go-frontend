import {getLinkQuery} from "../../lib/axiosHandler";
import {useRouter} from "next/router";

const LinkQuery = () => {
  const Router = useRouter()
  const { hash } = Router.query

  const {data, isLoading, isError} = getLinkQuery(hash)

  if (isLoading) {
    return (
      <div>
        loading...
      </div>
    )
  }

  if (isError) {
    return (
      <div>Error retrieving data</div>
    )
  }
  return (
    <div>
      query page
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default LinkQuery
