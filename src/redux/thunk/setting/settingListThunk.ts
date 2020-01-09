import { loadSettingList, loadSettingListSuccess, loadSettingListError } from 'src/redux/slices/setting/settingSlices';
import { loadSettingListService } from 'src/service/settingService';

export function loadSettingListAction(options) {
  return async dispatch => {
    dispatch(loadSettingList());
    try {
      const response = await loadSettingListService();
      dispatch(loadSettingListSuccess({
        data: response.data.objects
      }));
    } catch (error) {
      dispatch(loadSettingListError(error.message));
    }
  };
}