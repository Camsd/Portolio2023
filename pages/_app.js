import "../styles/globals.css";

//components
import Layout from "../components/Layout";

//router
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
        <div key={router.route}>
        <Component {...pageProps} />
        </div>
    </Layout>
  );
}

export default MyApp;
