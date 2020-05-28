import React, {Suspense, lazy} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    main: lazy(() => import('./pages'))
  },
  {
    path: '/login',
    main: lazy(() => import('./pages/login'))
  },
  {
    path: '/dashboard',
    main: lazy(() => import('./pages/dashboard'))
  },
  {
    path: '/task',
    main: lazy(() => import('./pages/task'))
  },
  {
    path: '/scrum',
    main: lazy(() => import('./pages/scrum'))
  }
];

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <Switch>
            {routes.map((r, x) => (
              <Route key={x} path={r.path} exact={r.exact} component={r.main} />
            ))}
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
