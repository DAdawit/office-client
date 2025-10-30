// store/usersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload;
    },
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { setUsers, addUser } = usersSlice.actions;

// Selectors
export const selectUsers = (state) => state.users.list;

export default usersSlice.reducer;
