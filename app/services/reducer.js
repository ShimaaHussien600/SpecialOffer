import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { UIReducer, UserReducer, AdvertiserReducer, OrderReducer } from './reducers';


// export class Reducer {
//   constructor(userReducer, UIReducer) {
//     this.userReducer = userReducer;
//     this.UIReducer = UIReducer;
//     this.rootconfig = {
//       key: 'root',
//       storage,
//       whitelist: ['userReducer']
//     };
//   }


//   getReducers=() => {
//     const userReducer = this.userReducer.reduce;
//     const UIReducer = this.UIReducer.reduce;
//     return persistCombineReducers(this.rootconfig, {
//       userReducer,
//       UIReducer
//     });
//   }
// }


const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['UserReducer']
};

export default persistCombineReducers(rootPersistConfig, {
  UserReducer: UserReducer.reduce,
  UIReducer: UIReducer.reduce,
  OrderReducer: OrderReducer.reduce,
  AdvertiserReducer: AdvertiserReducer.reduce
});
