import React, { Suspense, useState, useEffect } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../routes'
import useLocalStorage from '../reusable/UseLocalStorage';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {

  // const [isLogged, setIsLogged] = useState(localStorage.getItem('is_logged'));
  const [isLogged, setIsLogged] = useLocalStorage('is_logged', false);

  // useEffect(() => {
  //     console.log("Check Authenticate");
  //     // setIsLogged(localStorage.getItem('is_logged'));
  //     const l = isLogged;
  //     console.log('logged: '+ l);
  // }, [])

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
                  render={props =>
                    isLogged
                      ?
                       ( 
                       <CFade>
                          <route.component {...props} />
                        </CFade> 
                        ) 
                      // ( console.log("First_case") )
                      :
                      ( <Redirect to={{pathname: "/login" }}/> )
                      // ( console.log("Second_case") )
                } />
              )
            })}
            {/* {!isLogged ? <Redirect from="*" to="/login" /> : <Redirect from="/" to="/dashboard" />} */}
            {/* Redirect / */}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
