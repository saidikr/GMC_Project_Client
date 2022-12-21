import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./pages/404";
import { routes } from "./routes/index";
import {LoggedInRedirect} from "./components/loggedIn-redirect/index"
import { PrivateRoute } from "./private-route";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          {routes &&
          routes.map((route) => (
            <React.Fragment key={route.id}>
              {route.children && (
                <Route
                  path={route.path}
                  element={
                    route.isPrivate ? (
                      <PrivateRoute>
                        <route.element />
                      </PrivateRoute>
                    ) : route.path === "auth/login" ? (
                      <LoggedInRedirect>
                        <route.element />
                      </LoggedInRedirect>
                    ) : (
                      <route.element />
                    )
                  }
                >
                  {route.children.map((child) => (
                    child.path === "shop" 
                    ?(<Route path="shop" element={<child.element/>}>
                      {child.children.map((child2)=>(
                      <Route
                      key={child2.id}
                      path={child2.path}
                      element={<child2.element/>}
                    />
                      )
                      )}
                    </Route>)
                    :(
                    <Route
                      key={child.id}
                      path={child.path}
                      element={<child.element/>}
                    />)
                  ))}
                </Route>
              )}
              <Route
                path={route.path}
                element={
                  route.isPrivate ? (
                    <PrivateRoute>
                      <route.element />
                    </PrivateRoute>
                  ) : route.path === "auth/login" ? (
                    <LoggedInRedirect>
                      <route.element />
                    </LoggedInRedirect>
                  ) : (
                    <route.element />
                  )
                }
              />
            </React.Fragment>
          ))}
        <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
