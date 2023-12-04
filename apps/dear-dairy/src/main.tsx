import * as ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react'

import App from './app/app';
import { AppConfig } from './configs'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const providerConfig = {
  domain: AppConfig.Auth0.Domain,
  clientId: AppConfig.Auth0.ClientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: AppConfig.Auth0.Audience
  }
}
root.render(
  <Auth0Provider
    {...providerConfig}
  >
    <App />
  </Auth0Provider>
);
