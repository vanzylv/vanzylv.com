import { Stack, Timeline } from '@mantine/core'
import { BrandGit, GitCommit } from 'tabler-icons-react'
import EmployerWidget from './EmployerWidget'
import ResumeFilter from './ResumeFilter'
import { EmployerData } from '../interfaces/EmployerInterface'
import { useState } from 'react'

const employerData: EmployerData = require('../data/employers.json')

const About = () => {
    const [category, setCategory] = useState('all')
    const [subCategory, setSubCategory] = useState('all')

    return (
        <Stack>
            <ResumeFilter
                category={category}
                setCategory={setCategory}
                subCategory={subCategory}
                setSubCategory={setSubCategory}
            />
            <Timeline styles={{ itemTitle: { fontSize: 30 } }}>
                {employerData.employers.map((employer, index) => {
                    return (
                        <Timeline.Item
                            key={index}
                            title={employer.description}
                            bulletSize={30}
                            bullet={<BrandGit size={22} radius="xl" />}
                        >
                            <EmployerWidget {...employer} category={category} subCategory={subCategory} />
                        </Timeline.Item>
                    )
                })}

                <Timeline.Item
                    color="ocean-blue"
                    bulletSize={30}
                    bullet={<GitCommit size={22} radius="xl" />}
                >
                    Start
                </Timeline.Item>
            </Timeline>
        </Stack>
    )
}

export default About
