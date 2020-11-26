import { combineReducers } from 'redux';
import categoryReducer from './Category/category.reducer';
import commentReducer from './Comment/comment.reducer';
import messageReducer from './Messages/message.reducer'
import postReducer from './Post/post.reducer'
import userReducer from './User/user.reducer'

const rootReducer = combineReducers({

    posts: postReducer,
    user: userReducer,
    comments: commentReducer,
    messages: messageReducer,
    category: categoryReducer

});

export default rootReducer;