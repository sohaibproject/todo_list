import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AuthInitialState, UserCredential } from './types';
import config from '../../helpers/Headers-config';

import { UserModel } from './models';
import { $axios } from '../../../@core/services/api.services';
import { encryptMessage } from '../../../@core/utils/crypto/cryoto';
import qs from 'qs';
import { loadInitialState } from './helper';

const NAME_SPACE: string = 'auth';
const initialState: AuthInitialState = loadInitialState();

export const login = createAsyncThunk(NAME_SPACE, async (fromData: UserCredential, thunkAPI) => {
  const requestBody = qs.stringify(fromData);
  try {
    const res = await $axios.post('Tests/scripts/user-login.php', requestBody, config);
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue('server error');
  }
});

const authSlice = createSlice({
  name: NAME_SPACE,
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
      state.loading = true;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },

  extraReducers: (builder) => {
    //#region login
    builder.addCase(login.fulfilled, (state, action: PayloadAction<UserModel>) => {
      localStorage.setItem('token', encryptMessage(action.payload.user_token));
      const { user_token, ...rest } = action.payload;
      localStorage.setItem('user', encryptMessage(rest));
      state.loading = false;
      state.isAuth = true;
      state.user = action.payload;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });
    //  #endregion77
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
