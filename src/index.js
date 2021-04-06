import React from 'react'
import App from './App'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import rootReducer from './store/reducers/rootReducer'
import { BrowserRouter } from "react-router-dom"
import { applyMiddleware, createStore } from 'redux'
import { Provider } from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension'



const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
