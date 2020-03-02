import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import routes from './routes'
import { observer, inject } from 'mobx-react'
import NotFound from './pages/not-found'
const App = inject('login')(
  observer(({ login }) => {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map(item => {
            return (
              <Route
                key={item.name}
                exact
                path={item.path}
                render={props => {
                  return item.auth && !login.userToken ? (
                    <Redirect to="/login" {...props} />
                  ) : (
                    <item.component {...props} />
                  )
                }}
              />
            )
          })}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }),
)

export default App
