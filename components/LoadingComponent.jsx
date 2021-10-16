import ClipLoader from "react-spinners/ClipLoader";

const LoadingComponent = ({isLoading}) => {

  return (
    <div className="text-center">
      <ClipLoader color={"#000000"} loading={isLoading} size={150}/>
      <p className="text-center text-indigo-500">Loading data... this may
        take a few moments..</p>
    </div>
  )
}
export default LoadingComponent
