import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes'

// Ant Design
import 'antd/dist/antd.css';

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

function App() {
  // Routes
  const routeManagement = () => {
    return routes.map((route, index) => 
        <Route 
          key={index} 
          path={route.path} 
          component={route.component} 
          exact={route.exact}
        />
      )
  }

  return (
    <Router>
        <Switch>
            {routeManagement()}
        </Switch>   
    </Router>       
  );
}

export default App;
