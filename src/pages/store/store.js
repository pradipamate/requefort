import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Contactreducer from '../reducer/Contactreducer'   

export default () => {
    const store=createStore(Contactreducer,applyMiddleware(thunk));
    return store;
};
