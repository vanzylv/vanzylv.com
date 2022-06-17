import { Stack, Timeline } from '@mantine/core'
import { BrandGit, GitCommit } from 'tabler-icons-react'
import EmployerWidget from './EmployerWidget'
import ResumeFilter from './ResumeFilter'
import { employerData } from '../data/employerData'

const Resume = () => {

    return (
        <Stack>
            <ResumeFilter/>
            <Timeline styles={{ itemTitle: { fontSize: 30 } }}>
                {employerData.map((employer, index) => {
                    return (
                        <Timeline.Item
                            key={index}
                            title={employer.description}
                            bulletSize={30}
                            bullet={<BrandGit size={22} radius="xl" />}
                        >
                            <EmployerWidget
                                {...employer}
                            />
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

export default Resume
