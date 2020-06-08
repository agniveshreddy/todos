import { combineReducers } from 'redux';
import users from './usersReducer';
import todos from './todosReducer';

const rootReducer = combineReducers({
    users,
});

export default rootReducer;