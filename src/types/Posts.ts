import { type PortableTextBlock } from 'sanity'

export type Posts = [
  {
    title: string
    slug: {
      current: string
    }
    content: PortableTextBlock[]
  }
]
