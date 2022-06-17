import { Center, Container, SegmentedControl, SegmentedControlItem } from '@mantine/core'

import {useRecoilState, useRecoilValue} from "recoil";
import {devTagsStaticState, resumeCategory, resumeSubCategory} from "../state/atoms";
import {DevTag} from "../interfaces/DevTagsInterface";

const ResumeFilter = (): JSX.Element => {

    const devTags:DevTag[] = useRecoilValue(devTagsStaticState);
    const [category, setCategory] = useRecoilState(resumeCategory);
    const [subCategory, setSubCategory] = useRecoilState(resumeSubCategory);

    let categoryData: SegmentedControlItem[] = [{ value: 'all', label: 'All' }]
    let subCategoryData: SegmentedControlItem[] = []

    devTags.forEach(({ category, description }) => {
        return categoryData.push({ label: description, value: category })
    })

    const subCategories = devTags.filter((item) => item.category === category)

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
