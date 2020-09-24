import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './globalStyle.styled';
import StartLayout from './views/StartLayout/StartLayout'
import { store } from './store/store';

const App: React.FC = () => {

  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <StartLayout />
      </Provider>
    </div>
  );
}

export default App;
