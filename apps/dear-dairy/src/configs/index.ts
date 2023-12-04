export const AppConfig = {
  Auth0: {
    Domain: import.meta.env.VITE_AUTH0_DOMAIN,
    ClientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    Audience: import.meta.env.VITE_AUTH0_AUDIENCE,
  },
  Api: {
    BaseUrl: import.meta.env.VITE_API_BASE_URL,
  },
}
