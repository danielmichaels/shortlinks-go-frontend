import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import HeadAndSeo from "../layout/HeadAndSeo";
import {SWRConfig} from "swr";
import PlausibleProvider from "next-plausible";

function App({Component, pageProps}) {
  return (
    <div>
      <PlausibleProvider domain="tars.run">
      <SWRConfig
        value={{
          shouldRetryOnError: true,
        }}>
        <HeadAndSeo/>
        <ToastContainer/>
        <Component {...pageProps} />
      </SWRConfig>
      </PlausibleProvider>
    </div>
  )
}

export default App
