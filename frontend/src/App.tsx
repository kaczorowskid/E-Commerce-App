import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './globalStyle.styled';
import { store } from './store/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import StartLayout from './views/StartLayout/StartLayout'
import Auth from './views/Login/Login';
import Register from './views/Register/Register';
import AccountSettings from './views/AccountSettings/AccountSettings';


const App: React.FC = () => {

  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />

        <Router>
          <Switch>
            <Route path = '/index' component={StartLayout} />
            <Route path = '/auth-login' component={Auth} />
            <Route path = '/auth-register' component = {Register} />
            <Route path = '/settings-mypersonalities' component = {AccountSettings} />
          </Switch>
        </Router>

      </Provider>
    </div>
  );
}

export default App;
