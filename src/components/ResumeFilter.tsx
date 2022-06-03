import { Center, Container, SegmentedControl, SegmentedControlItem, Space } from '@mantine/core'
import { useState } from 'react'
import { DevTags } from '../interfaces/DevTagsInterface'

const devTags: DevTags = require('../data/tags.json')

const ResumeFilter = (): JSX.Element => {
    const [category, setCategory] = useState('all')
    const [subCategory, setSubCategory] = useState('all')

    let categoryData: SegmentedControlItem[] = [{ value: 'all', label: 'All' }]
    let subCategoryData: SegmentedControlItem[] = []

    devTags.tags.forEach(({ category, description }) => {
        return categoryData.push({ label: description, value: category })
    })

    const subCategories = devTags.tags.filter((item) => item.category === category)

    if (subCategories.length > 0) {
        subCategoryData.push({ value: 'all', label: 'All' })
        subCategories[0].frameworks.forEach(({ name, description }) => {
            return subCategoryData.push({ label: description, value: name })
        })
    }

    return (
        <>
            <Container fluid style={{ margin: 10 }}>
                <SegmentedControl
                    fullWidth
                    value={category}
                    onChange={setCategory}
                    data={categoryData}
                />
            </Container>
            <Space />
            <Container fluid style={{ margin: 10, minHeight: 25 }}>
                {subCategoryData.length > 1 ? (
                    <Center>
                        <SegmentedControl
                            value={subCategory}
                            onChange={setSubCategory}
                            data={subCategoryData}
                        />
                    </Center>
                ) : null}
            </Container>
        </>
    )
}

export default ResumeFilter
