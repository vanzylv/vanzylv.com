import { atom } from 'recoil'

import { devTags } from '../data/tags'
import { employerData } from '../data/employerData'

export const devTagsStaticState = atom({
    key: 'devTagsStatic',
    default: devTags,
})

export const employerStaticState = atom({
    key: 'employersStatic',
    default: employerData,
})

export const resumeCategory = atom({
    key: 'resumeCategory',
    default: 'all',
})

export const resumeSubCategory = atom({
    key: 'resumeSubCategory',
    default: 'all',
})
