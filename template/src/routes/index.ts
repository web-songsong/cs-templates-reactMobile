import home from './home'
import login from './login'

import { RouteProps } from 'react-router-dom'

interface RouterAPI extends RouteProps {
  name: string
  auth?: boolean
  path?: string
  component?: any
}

const routes: Array<RouterAPI> = [...home, ...login]

export default routes
