import React from 'react';
import Layout from './Hoc(Hight order component)/Layout';
import { Switch, Route } from 'react-router-dom';

import Home from './Component/home';
import SignIn from './Component/signin';
import TheTeam from './Component/theTeam';
import TheMatches from './Component/theMatches';
import NotFound from './Component/ui/404';

import Dashbord from './Component/admin/Dashbord';
import PrivateRoute from './Component/authRoutes/priveteRoutes';
import PublicRoute from './Component/authRoutes/publicRoute';
import AdminMatches from './Component/admin/matches';
import AddEditMatch from './Component/admin/matches/addEditMatch';
import AdminPlayer from './Component/admin/player';
import AddEditPlayer from './Component/admin/player/addEditPlayer';




const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path="/admin_players/add_player" exact component = {AddEditPlayer} />
        <PrivateRoute {...props} path="/admin_players/edit_player/:id" exact component = {AddEditPlayer} />
        <PrivateRoute {...props} path="/admin_players" exact component = {AdminPlayer} />
        <PrivateRoute {...props} path="/admin_matches/add_match" exact component = {AddEditMatch} />
        <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component = {AddEditMatch} />
        <PrivateRoute {...props} path="/admin_matches" exact component = {AdminMatches} />
        <PrivateRoute {...props} path="/dashboard" exact component = {Dashbord} />
        <PublicRoute  {...props} restricted={true} path="/sign_in" exact component = {SignIn} />
        <PublicRoute  {...props} restricted={false} path="/the_matches" exact component = {TheMatches} />
        <PublicRoute  {...props} restricted={false} path="/the_team" exact component = {TheTeam} />
        <PublicRoute  {...props} restricted={false} path="/" exact component = {Home} />
        <PublicRoute  {...props} restricted={false} path="/" component = {NotFound} />

      </Switch>
    </Layout>
  )
}

export default Routes;

//         <Route exact component = { Dashbord } exac path="/dashbord" />
