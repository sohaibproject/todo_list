import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AuthInitialState, UserCredential } from './types';
import config from '../../helpers/Headers-config';

import { UserModel } from './models';
import { $axios } from '../../../@core/services/api.services';
import { encryptMessage } from '../../../@core/utils/crypto/cryoto';
import qs from 'qs';

const NAME_SPACE: string = 'auth';
const initialState: AuthInitialState = {
  is_auth: false,
  loading: false,
  user: null,
};

export const login = createAsyncThunk(NAME_SPACE, async (fromData: UserCredential, thunkAPI) => {
  const requestBody = qs.stringify(fromData);
  // console.log('requestBody', requestBody);

  try {
    const res = await $axios.post('Tests/scripts/user-login.php', requestBody, config);
    // const res = await axios.post('https://dev.rapptrlabs.com/Tests/scripts/user-login.php', requestBody, {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    // });

    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue('server error');
  }
});

const authSlice = createSlice({
  name: NAME_SPACE,
  initialState,
  reducers: {
    logout: (state, action: PayloadAction) => {
      state.is_auth = false;
      state.user = null;
      state.loading = true;
      localStorage.removeItem('token');
    },
  },

  extraReducers: (builder) => {
    //#region login
    builder.addCase(login.fulfilled, (state, action: PayloadAction<UserModel>) => {
      localStorage.setItem('token', encryptMessage(action.payload.user_token));
      state.loading = false;
      state.is_auth = true;
      state.user = action.payload;
    });
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    });
    //  #endregion77
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
