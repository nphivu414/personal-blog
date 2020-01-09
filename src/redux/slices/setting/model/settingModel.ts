interface SettingHeroImg {
  url: string,
  imgix_url: string,
}

interface AuthorAvatarImg {
  url: string,
  imgix_url: string,
}

interface SettingMetadata {
  site_title?: string,
  site_heading?: string,
  homepage_hero?: SettingHeroImg,
  site_description?: string,
  author_name?: string,
  author_bio?: string,
  author_avatar?: AuthorAvatarImg
}

interface Setting {
  slug: string,
  title: string,
  content: string,
  metadata: SettingMetadata,
}

export { Setting }