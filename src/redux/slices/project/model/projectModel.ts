interface ProjectHeroImg {
  url: string,
  imgix_url: string,
}

interface ProjectMetadata {
  hero?: ProjectHeroImg,
  description?: string,
  play_store_link?: string,
  app_store_link?: string,
  landing_page_link?: string
}

interface Project {
  _id: string,
  slug: string,
  title: string,
  content: string,
  metadata: ProjectMetadata,
}

export { Project }