import { Project } from './model/projectModel'

type projectList = {
  data: Project[],
  error?: string,
}

type projectDetail = {
  data: Project,
  error?: string,
}

export type projectState = {
  loadingStatus: loadingStatus,
  projectList: projectList,
  projectDetail: projectDetail,
}

type loadingStatus = {
  isLoadingProjectList: boolean,
  isLoadingProjectDetail: boolean,
}

export type projectListPayload = {
  data: Project[],
  error?: string,
}

export const initialState: projectState = {
  loadingStatus: {
    isLoadingProjectDetail: false,
    isLoadingProjectList: false,
  },
  projectList: {
    data: []
  },
  projectDetail: {
    data: {
      _id: '',
      content: '',
      metadata: {},
      slug: '',
      title: '',
    }
  }
}