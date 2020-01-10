import React from 'react';
import Layout from './Hoc(Hight order component)/Layout';
import { Switch, Route } from 'react-router-dom';

import Home from './Component/home';
import SignIn from './Component/signin';
import Dashbord from './Component/admin/Dashbord';
import PrivateRoute from './Component/authRoutes/priveteRoutes';


const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path="/dashbord" exact component = {Dashbord} />
        <Route exact component = { SignIn } path="/sign_in" />
        <Route exact component = { Home } path="/" />
      </Switch>
    </Layout>
  )
}

export default Routes;

//         <Route exact component = { Dashbord } exac path="/dashbord" />
