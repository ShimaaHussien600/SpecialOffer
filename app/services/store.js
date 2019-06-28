import { applyMiddleware, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootSaga from './saga';
import rootReducer from './reducer';


// const bindMiddleware = (middleware) => {
//   if (process.env.NODE_ENV !== 'production') {
//     const { composeWithDevTools } = require('redux-devtools-extension');

//     return composeWithDevTools(applyMiddleware(...middleware));
//   }

//   return applyMiddleware(...middleware);
// };

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore();
