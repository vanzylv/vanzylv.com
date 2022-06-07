import { Stack, Timeline, Transition } from '@mantine/core'
import { BrandGit, GitCommit } from 'tabler-icons-react'
import EmployerWidget from './EmployerWidget'
import ResumeFilter from './ResumeFilter'
import { EmployerData } from '../interfaces/EmployerInterface'
import { useState } from 'react'

const employerData: EmployerData = require('../data/employers.json')

const About = () => {
    const [trans, setTrans] = useState(false)

    return (
        <Transition
            onExit={() => setTrans(true)}
            mounted={trans}
            transition="pop"
            duration={150}
            timingFunction="ease"
        >
            {(styles) => (
                <Stack style={styles}>
                    <ResumeFilter />
                    <Timeline styles={{ itemTitle: { fontSize: 30 } }}>
                        {employerData.employers.map((employer, index) => {
                            return (
                                <Timeline.Item
                                    key={index}
                                    title={employer.description}
                                    bulletSize={30}
                                    bullet={<BrandGit size={22} radius="xl" />}
                                >
                                    <EmployerWidget {...employer} />
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
            )}
        </Transition>
    )
}

export default About
