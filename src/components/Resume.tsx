import { Container, Divider, Timeline } from '@mantine/core'
import { BrandGit, GitCommit, GitFork } from 'tabler-icons-react'
import Employer from "./Employer";
import ResumeFilter from "./ResumeFilter";

const bnz = require('../assets/bnz.jpg')

const About = () => {
    return (
        <Container style={{ padding: 10, marginTop: 10 }}>
            <div>Resume.</div>
            <Divider my="sm" />
            <ResumeFilter/>
            <div style={{ margin: 'auto' }}>
                <Timeline>
                    <Timeline.Item
                        color="ocean-blue"
                        title="Bank of New Zealand."
                        bulletSize={30}
                        bullet={<BrandGit size={22} radius="xl" color="green" />}
                    >
                        <Employer />
                    </Timeline.Item>
                    <Timeline.Item
                        title="Hiplee"
                        bulletSize={30}
                        bullet={<GitCommit size={22} radius="xl" />}
                    >
                        <div>May 2018 - October 2018</div>
                    </Timeline.Item>

                    <Timeline.Item
                        title="Solnet Solutions"
                        bulletSize={30}
                        bullet={<GitCommit size={22} radius="xl" />}
                    >
                        <div>March 2017 - April 2018</div>
                    </Timeline.Item>

                    <Timeline.Item
                        title="BBD Software development"
                        bulletSize={30}
                        bullet={<GitCommit size={22} radius="xl" />}
                    >
                        <div>2010 – 2017</div>
                    </Timeline.Item>

                    <Timeline.Item
                        title="Enerweb"
                        bulletSize={30}
                        bullet={<GitFork size={22} radius="xl" />}
                    >
                        <div>2001 - 2010</div>
                    </Timeline.Item>
                </Timeline>
            </div>
        </Container>
    )
}

export default About
