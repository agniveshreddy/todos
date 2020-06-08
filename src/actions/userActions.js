import { types } from './index';

export const addUser = (user, duration) => {
    return {
        type: types.ADD_USER,
        user,
        duration
    }
};

export const deleteUser = (user) => {
    return {
        type: types.DELETE_USER,
        user
    }
};