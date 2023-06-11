import { atom } from 'recoil'
import { User } from '../types/interfaces'
export const userAtom = atom({
  default: {} as User,
  key: 'user',
})
