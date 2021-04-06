import './scss/App.scss';
import { Switch } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { MainPage } from './pages/main/MainPage';
import { useSelector } from 'react-redux';
import { GuestLayout } from './layouts/GuestLayout';
import LoginPage from './pages/guest/LoginPage';
import RegistrationPage from './pages/guest/RegistrationPage';



function App() {
  const user = useSelector(state => state.user);

  const app = (!!user.id) ? (
    <DefaultLayout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </DefaultLayout>
  ) : (
    <GuestLayout>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/registration" exact component={RegistrationPage} />
        <Redirect to="/" />
      </Switch>
    </GuestLayout>
  );

  return (
    <>
      { app }
    </>
  );
}

export default App;