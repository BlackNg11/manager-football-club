import React from 'react';
import Layout from './Hoc(Hight order component)/Layout';
import { Switch, Route } from 'react-router-dom';

import Home from './Component/home';
import SignIn from './Component/signin';
import Dashbord from './Component/admin/Dashbord';
import PrivateRoute from './Component/authRoutes/priveteRoutes';
import PublicRoute from './Component/authRoutes/publicRoute';
import AdminMatches from './Component/admin/matches';
import AddEditMatch from './Component/admin/matches/addEditMatch';


const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path="/admin_matches/edit_match" exact component = {AddEditMatch} />
        <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component = {AddEditMatch} />
        <PrivateRoute {...props} path="/admin_matches" exact component = {AdminMatches} />
        <PrivateRoute {...props} path="/dashboard" exact component = {Dashbord} />
        <PublicRoute  {...props} restricted={true} path="/sign_in" exact component = {SignIn} />
        <PublicRoute  {...props} restricted={false} path="/" exact component = {Home} />
      </Switch>
    </Layout>
  )
}

export default Routes;

//         <Route exact component = { Dashbord } exac path="/dashbord" />
