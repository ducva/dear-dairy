import * as ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './app/app';
import { AppConfig } from './configs'

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// Create a client
const queryClient = new QueryClient()
const providerConfig = {
  domain: AppConfig.Auth0.Domain,
  clientId: AppConfig.Auth0.ClientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: AppConfig.Auth0.Audience
  }
}

enableMocking().then(() => {
  root.render(
    <Auth0Provider
      {...providerConfig}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Auth0Provider >
  );
})
