import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </main>
  )
}

export default MyApp
