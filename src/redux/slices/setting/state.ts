import { Setting } from './model/settingModel';
type SettingList = {
  data: Setting[],
  error?: string,
}
type SettingDetail = {
  data: Setting,
  error?: string,
}
export type SettingState = {
  loadingStatus: LoadingStatus,
  settingList: SettingList,
  settingDetail: SettingDetail,
}

type LoadingStatus = {
  isLoadingSettingList: boolean,
  isLoadingSettingDetail: boolean,
}

export type SettingListPayload = {
  data: Setting[],
  error?: string,
}

export const initialState: SettingState = {
  loadingStatus: {
    isLoadingSettingDetail: false,
    isLoadingSettingList: false,
  },
  settingList: {
    data: []
  },
  settingDetail: {
    data: {
      content: '',
      metadata: {},
      slug: '',
      title: '',
    }
  }
}