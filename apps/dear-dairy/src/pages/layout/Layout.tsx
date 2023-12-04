import { Flex } from "@mantine/core"
import { Outlet, useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"

export const Layout = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((token) => {
        localStorage.setItem('token', token)
        navigate('/master')
      })
    }
  }, [isAuthenticated, user])

  return (
    <Flex>
      <Outlet />
    </Flex>
  )
}
