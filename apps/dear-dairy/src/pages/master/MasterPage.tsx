import { Grid, List, Select } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import { UserApi } from "../../apis"

export const MasterPage = () => {
  const personsData = useQuery({
    queryKey: ['persons'],
    queryFn: async () => {
      const response = await UserApi.getUsers()
      console.log(response)
    }
  })
  return (
    <Grid>
      <Grid.Col span={12}>
        <Select
          label="Select Person"
          description="Select person to see his tasks"
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <List>
          <List.Item>Clone or download repository from GitHub</List.Item>
          <List.Item>Install dependencies with yarn</List.Item>
          <List.Item>To start development server run npm start command</List.Item>
          <List.Item>Run tests to make sure your changes do not break the build</List.Item>
          <List.Item>Submit a pull request once you are done</List.Item>
        </List>
      </Grid.Col>
      <Grid.Col span={6}>
        Detail
      </Grid.Col>

    </Grid>
  )
}
