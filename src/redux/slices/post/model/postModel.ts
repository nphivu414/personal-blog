interface PostHeroImg {
  url: string,
  imgix_url: string,
}

interface PostMetadata {
  hero?: PostHeroImg,
  description?: string,
}

interface Post {
  _id: string,
  slug: string,
  title: string,
  content: string,
  metadata: PostMetadata,
}

export { Post }