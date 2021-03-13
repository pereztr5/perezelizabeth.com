export interface Member {
  role: string
  image: string
  name: string
  twitter: string
  linkedin: string
  description: string
}

export const members: Member[] = [
  {
    role: 'Designer',
    image: '/images/profile.png',
    name: 'Elizabeth Perez',
    twitter: '#',
    linkedin: '#',
    description:
      'Diam maecenas sed enim ut sem viverra aliquet eget magna ac placerat vestibulum.',
  },
]
