import { type PortableTextBlock } from 'sanity'

export type Post = {
  title: string
  slug: {
    current: string
  }
  content: PortableTextBlock[]
}
