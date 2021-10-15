import LoadingComponent from "./LoadingComponent";

const AboutComponent = () => {
  return (
    <div>
      <h1>About page</h1>
      <p>obviously a work in progress...</p>
      <LoadingComponent isLoading={true} />
    </div>
  )
}

export default AboutComponent
