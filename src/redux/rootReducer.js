import { combineReducers } from 'redux';
import counterReducer from './Counter/counter.reducer';
import postReducer from './Post/post.reducer'

const rootReducer = combineReducers({

    counter: counterReducer,
    posts: postReducer,

});

export default rootReducer;