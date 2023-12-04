import { http } from 'msw'
import { getUsers } from './users'

export const handlers = [
  http.get('/api/users', getUsers),
]
