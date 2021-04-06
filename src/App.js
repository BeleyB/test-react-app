import './scss/App.scss';
import { Switch } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { MainPage } from './pages/main/MainPage';
import { useDispatch, useSelector } from 'react-redux';
import { GuestLayout } from './layouts/GuestLayout';
import LoginPage from './pages/guest/LoginPage';
import RegistrationPage from './pages/guest/RegistrationPage';
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_POSTS, ROUTE_PROFILE, ROUTE_SIGNUP, ROUTE_USERS } from './api/routes';
import { useEffect } from 'react';
import { auth, autoLogin } from './store/actions/auth';
import { UserPage } from './pages/main/UserPage';
import { UsersPage } from './pages/main/UsersPage';
import { PostsPage } from './pages/main/PostsPage';



function App() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin())
  }, []);

  // console.log(auth);

  const app = (!!auth.token) ? (
    <DefaultLayout>
      <Switch>
        <Route path={ROUTE_HOME} exact component={MainPage} />
        <Route path={ROUTE_PROFILE} component={UserPage} />
        <Route path={ROUTE_USERS} component={UsersPage} />
        <Route path={ROUTE_POSTS} component={PostsPage} />
        <Redirect to={ROUTE_HOME} />
      </Switch>
    </DefaultLayout>
  ) : (
    <GuestLayout>
      <Switch>
        <Route path={ROUTE_LOGIN} exact component={LoginPage} />
        <Route path={ROUTE_SIGNUP} exact component={RegistrationPage} />
        <Redirect to={ROUTE_LOGIN} />
      </Switch>
    </GuestLayout>
  );

  return (
    <>
      { app}
    </>
  );
}

export default App;