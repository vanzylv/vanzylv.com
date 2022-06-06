import { Container, Divider, Timeline } from '@mantine/core'
import { BrandGit, GitCommit, GitFork, H1 } from 'tabler-icons-react'
import EmployerWidget from './EmployerWidget'
import ResumeFilter from './ResumeFilter'
import { EmployerData } from '../interfaces/EmployerInterface'

const employerData: EmployerData = require('../data/employers.json')

const About = () => {
    return (
        <Container style={{ padding: 10, marginTop: 10 }}>
            <div>Resume.</div>
            <Divider my="sm" />
            <ResumeFilter />
            <div style={{ margin: 'auto' }}>
                <Timeline  styles={{ itemTitle: { fontSize: 30 } }}>
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
            </div>
        </Container>
    )
}

export default About
