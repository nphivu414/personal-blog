import { createSelector } from 'reselect';
import { RootState } from 'src/redux/rootReducer';

export const getSettingList = createSelector(
  (state: RootState) => state.setting.settingList,
  (settingList) => settingList.data || []
);