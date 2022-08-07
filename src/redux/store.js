import {createStore} from 'redux';
import {productReducer} from './reducers/productReducer';
import reducers from './reducers';


const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;