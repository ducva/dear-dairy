import { HttpResponse, ResponseResolver } from 'msw'
export const getUsers: ResponseResolver = ({ request, params, cookies }) => {
  return HttpResponse.json({})
}