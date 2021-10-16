import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import HeadAndSeo from "../layout/HeadAndSeo";
import {SWRConfig} from "swr";

function App({Component, pageProps}) {
  return (
    <div>
      <SWRConfig
        value={{
          shouldRetryOnError: true,
        }}>
        <HeadAndSeo/>
        <ToastContainer/>
        <Component {...pageProps} />
      </SWRConfig>
    </div>
  )
}

export default App
