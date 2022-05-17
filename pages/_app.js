import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { GlobalStyles } from "twin.macro";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
