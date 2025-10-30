import { publicApiClient } from "@/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const userLogin = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await publicApiClient.post(
        "/user_api/login_user",
        credentials,
        {
          headers: {
            GET_LOGIN_USER_API: import.meta.env.VITE_GET_LOGIN_USER_API,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error, "err");
      return thunkAPI.rejectWithValue(
        error?.response?.data || { message: "Login failed" }
      );
    }
  }
);

const initialState = {
  email: null,
  token: null,
  organizationID: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.email = null;
      state.organizationID = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.error = null;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.organizationID = action.payload.organizationID;
        // sessionStorage.setItem("token", action.payload.token);
        sessionStorage.setItem("token", action.payload.token);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
