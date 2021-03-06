import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import App from './App'
import './index.css'

/* 
METODO ANTIGO
import { createStore } from 'redux'
import Reducers from './reducers'; */
/* const store = createStore(Reducers); */

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
