import React from 'react';
import GitExplorer from './components/GitExplorer'
import { Provider } from 'react-redux';
import store from './components/store';
import 'bootstrap/dist/css/bootstrap.min.css';
// it's important to import our custom css after bootstrap as we're overriding stuff in there
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GitExplorer />
      </Provider>
    </div>
  );
}

export default App;
