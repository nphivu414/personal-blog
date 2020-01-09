import axios from 'axios';

export async function loadSettingListService() {
  let url = `https://api.cosmicjs.com/v1/d1ed4440-2ba4-11ea-b307-33d62915b757/objects?&type=settings&limit=20&props=slug,title,content,metadata`;
  let result = await axios.get(url);
  return result;
};