import { combineReducers } from 'redux';
import counterReducer from './Counter/counter.reducer';
import postReducer from './Post/post.reducer'
import userReducer from './User/user.reducer'

const rootReducer = combineReducers({

    counter: counterReducer,
    posts: postReducer,
    user: userReducer

});

export default rootReducer;