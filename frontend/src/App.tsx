import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './globalStyle.styled';
import StartLayout from './views/StartLayout/StartLayout'
import { store } from './store/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App: React.FC = () => {

  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        
        <Router>
          <Switch>
            <Route path = '/index' component = {StartLayout} />
           
          </Switch>
        </Router>

      </Provider>
    </div>
  );
}

export default App;
