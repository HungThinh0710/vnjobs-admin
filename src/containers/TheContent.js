import React, { Suspense, useState, useEffect } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../routes'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {

  const [isLogged, setIsLogged] = useState(localStorage.getItem('is_logged'));
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("check");
      setIsLogged(localStorage.getItem('is_logged'));
    }, 60000);
    return () => clearInterval(interval);
  }, [])

  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })}
            {!isLogged ? <Redirect from="*" to="/login" /> : <Redirect from="/" to="/dashboard" />}
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
