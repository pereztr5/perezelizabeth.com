export interface ArtworkData {
  type: 'article' | 'webinar' | 'video'
  tags: string[]
  title: string
  description: string
  image: string
  href?: string
}

export const artworks: ArtworkData[] = [
  {
    image: '/images/tony_artwork_fish_1.jpg',
    title: '2020 Chakra UI Developer Survey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt fugiat nulla pariatur.',
    type: 'article',
    tags: ['community', 'research'],
  },
  {
    image: '/images/tony_artwork_fish_1.jpg',
    title: '2020 Chakra UI Developer Survey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt fugiat nulla pariatur.',
    type: 'article',
    tags: ['community', 'research'],
  },
  {
    image: '/images/tony_artwork_fish_1.jpg',
    title: '2020 Chakra UI Developer Survey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt fugiat nulla pariatur.',
    type: 'article',
    tags: ['community', 'research'],
  },
  {
    image: '/images/tony_artwork_fish_1.jpg',
    title: '2020 Chakra UI Developer Survey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt fugiat nulla pariatur.',
    type: 'article',
    tags: ['community', 'research'],
  },
  {
    image: '/images/tony_artwork_fish_1.jpg',
    title: '2020 Chakra UI Developer Survey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt fugiat nulla pariatur.',
    type: 'article',
    tags: ['community', 'research'],
  },
  {
    image: '/images/tony_artwork_fish_1.jpg',
    title: '2020 Chakra UI Developer Survey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt fugiat nulla pariatur.',
    type: 'article',
    tags: ['community', 'research'],
  },
]
