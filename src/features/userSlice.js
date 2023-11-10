import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : { isAuth: false, uid: '', email: '', displayName: '' };

const userSlice = createSlice({
  name: 'user',
  initialState: { user: initialState },
  reducers: {
    addUser: (state, action) => {
      const user = JSON.parse(action.payload);
      state.user.isAuth = true;
      state.user.uid = user.uid;
      state.user.email = user.email;
      state.user.displayName = user.displayName;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    removeUser: (state) => {
      state.user.isAuth = false;
      state.user.uid = '';
      state.user.email = '';
      state.user.displayName = '';
      localStorage.setItem('user', JSON.stringify(state.user));
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
