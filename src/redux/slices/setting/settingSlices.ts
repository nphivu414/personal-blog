import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState, SettingListPayload } from './state';

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    loadSettingList(state, action: PayloadAction<SettingListPayload>) {
      state.loadingStatus.isLoadingSettingList = true;
    },
    loadSettingListSuccess(state, action: PayloadAction<SettingListPayload>) {
      const { data } = action.payload;
      state.settingList.data = data;
      state.loadingStatus.isLoadingSettingList = false;
    },
    loadSettingListError(state, action: PayloadAction<SettingListPayload>) {
      const { error } = action.payload;
      state.settingList.error = error;
      state.loadingStatus.isLoadingSettingList = false;
    },
  }
})

export const {
  loadSettingList,
  loadSettingListSuccess,
  loadSettingListError
} = settingSlice.actions

export default settingSlice.reducer