import { http, HttpResponse } from 'msw'
import { getUsers } from './users'

export const handlers = [
  http.get('/users', getUsers),
]
