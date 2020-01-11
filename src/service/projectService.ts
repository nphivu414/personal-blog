import axios from 'axios';

export async function loadProjectListService() {
  let url = `https://api.cosmicjs.com/v1/d1ed4440-2ba4-11ea-b307-33d62915b757/objects?pretty=true&hide_metafields=true&type=projects&limit=20&props=slug,title,content,metadata,`;
  let result = await axios.get(url);
  return result;
};