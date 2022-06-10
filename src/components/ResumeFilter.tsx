import { Center, Container, SegmentedControl, SegmentedControlItem } from '@mantine/core'
import { useState } from 'react'
import { DevTags } from '../interfaces/DevTagsInterface'

const devTags: DevTags = require('../data/tags.json')

interface Props {
    category: string
    setCategory: Function
    subCategory: string
    setSubCategory: Function
}

const ResumeFilter = ({
    category,
    setCategory,
    subCategory,
    setSubCategory,
}: Props): JSX.Element => {
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
                    size="lg"
                    value={category}
                    onChange={(value) => {
                        setCategory(value)
                        setSubCategory('all')
                    }}
                    data={categoryData}
                />
            </Container>
            <Container fluid>
                {subCategoryData.length > 1 ? (
                    <Center>
                        <SegmentedControl
                            value={subCategory}
                            onChange={(value) => setSubCategory(value)}
                            data={subCategoryData}
                        />
                    </Center>
                ) : null}
            </Container>
        </>
    )
}

export default ResumeFilter
