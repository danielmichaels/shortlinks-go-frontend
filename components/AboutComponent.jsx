import LoadingComponent from "./LoadingComponent";
import HeadAndSeo from "../layout/HeadAndSeo";

const AboutComponent = () => {
  return (
    <div>
      <HeadAndSeo page_title={`About`} />
      <h1>About page</h1>
      <p>obviously a work in progress...</p>
      <LoadingComponent isLoading={true} />
    </div>
  )
}

export default AboutComponent
