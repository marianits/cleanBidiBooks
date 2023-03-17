import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SessionProvider } from "next-auth/react"
import Layout from '../components/Layout';

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider> 
    </QueryClientProvider>
  );
}

export default MyApp
