import { atom } from 'recoil'

export const userAtom = atom({
  default: {
    avatar: '',
    name: '',
    username: '',
    followers: 0,
    following: 0,
    twitter: '',
    github: '',
    linkedin: '',
    youtube: '',
  },
  key: 'user',
})
