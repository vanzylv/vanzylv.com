import { SegmentedControl, SegmentedControlItem } from '@mantine/core'
import { useState } from 'react'
import { DevTags } from '../interfaces/DevTagsInterface'

const devTags: DevTags = require('../data/tags.json')

const ResumeFilter = (): JSX.Element => {
    const [value, setValue] = useState('all')

    let data: SegmentedControlItem[] = [{ value: 'all', label: 'All' }]

    devTags.tags.forEach(({ category, description }) => {
        return data.push({ label: description, value: category })
    })

    return <SegmentedControl fullWidth value={value} onChange={setValue} data={data} />
}

export default ResumeFilter
