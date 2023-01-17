import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '../components/Layout';

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp
