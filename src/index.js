import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location';
import actionCable from 'actioncable'
import store from './redux/store';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const CableApp = {}
  CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')
export const ActionCableContext = createContext()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <LastLocationProvider>
        <ActionCableContext.Provider value={CableApp.cable}>
          <App />
        </ActionCableContext.Provider>
        </LastLocationProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
