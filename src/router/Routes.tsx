import * as React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import History from './history';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import ResetEmail from '../pages/ResetEmail/ResetEmail';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import {Layout} from '../pages/Layout/Layout';
import {NavigationBar} from '../components/NavigationBar/NavigationBar';
import Status from '../pages/Status/Status';
import Explore from '../pages/Explore/Explore';
import {PrivateRoute} from '../components/PrivateRoute/PrivateRoute';
import {PublicOnlyRoute} from '../components/PublicOnlyRoute/PublicOnlyRoute';
import {LogOut} from '../pages/Logout/Logout';
import {RoutePaths} from './RoutePaths';

const Routes = () => (
  <React.Fragment>
    <NavigationBar />
      <Layout>
        <Router history={History}>
          <Switch>
            <Route exact={true} path={RoutePaths.home} component={Home}/>
            <PublicOnlyRoute exact={true} path={RoutePaths.login} component={Login} redirectTo={RoutePaths.profile}/>
            <PrivateRoute exact={true} path={RoutePaths.profile} component={Profile}/>
            <PrivateRoute exact={true} path={RoutePaths.resetEmail} component={ResetEmail}/>
            <PrivateRoute exact={true} path={RoutePaths.resetPassword} component={ResetPassword}/>
            <Route exact={true} path={RoutePaths.explore} component={Explore}/>
            <Route exact={true} path={RoutePaths.status} component={Status}/>
            <Route exact={true} path={RoutePaths.logout} component={LogOut}/>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Layout>
  </React.Fragment>
);

export default Routes;
