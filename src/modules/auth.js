import { createAction, handleActions } from 'redux-actions';

// action type
const LOGIN = 'auth/LOGIN'
const LOGOUT = 'auth/LOGOUT'

// action creator

export const login = createAction(LOGIN); 
export const logout = createAction(LOGOUT); 


const initialState = {
    // token값도 넣을 예정
    admin_id: ''
};

// action
export default handleActions({
    [LOGIN]: (state, action) => {
        state.admin_id = action.id
    },
    [LOGOUT]: (state, action) => {
        state.admin_id = ''
    },
    
}, initialState)