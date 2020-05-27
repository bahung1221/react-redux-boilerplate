import React from "react"
import { Route, Switch } from "react-router-dom"
import Root from '../containers/Root'
import Post from '../containers/post-detail/Post'

const ROUTES = [
  {
    path: "/",
    key: "APP", // Unique key for each route
    component: RenderRoutes,
    routes: [
      {
        path: "/",
        key: "APP_ROOT",
        exact: true,
        component: Root,
      },
      {
        path: "/:id",
        key: "APP_PAGE",
        exact: true,
        component: Post,
      },
    ],
  },
]

export default ROUTES

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  )
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  )
}
