import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import CounterReducer  from "./Redux/ProductSlice"
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';
// const store = configureStore({
//   reducer: {
//     CounterReducer
//   }
// })

const persistConfig = {
  key: 'final',
  storage,
};


const rootReducer = combineReducers({
  CounterReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);






const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              // Ignore actions from redux-persist
              ignoredActions: [
                  'persist/PERSIST',
                  'persist/REHYDRATE',
                  'persist/REGISTER',
                  'persist/FLUSH',
                  'persist/PAUSE',
                  'persist/PURGE',
              ],
          },
      }),
});


const persistor = persistStore(store);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
      <App />
      </PersistGate>
      
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
