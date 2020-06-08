import { types } from 'actions';

export default function(state = [], action) {
  const { user, error } = action;
  console.log('user: '+ user);
  switch(action.type) {
    case types.ADD_USER_SUCCESS:
      return [...state, user];
    case types.DELETE_USER_SUCCESS:
      return state.splice(index, 1);
    case types.ADD_USER_ERROR:
      return { error };
    default:
      return state;
  }
};