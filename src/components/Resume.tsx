import { Container, Divider, Image, Timeline } from '@mantine/core'
import { BrandGit, Calendar, GitCommit, GitFork } from 'tabler-icons-react'

const bnz = require('../assets/bnz.jpg')

const About = () => {
    return (
        <Container style={{ padding: 10, marginTop: 10 }}>
            <div>Resume.</div>
            <Divider my="sm" />

            <div style={{ margin: 'auto' }}>
                <Timeline>
                    <Timeline.Item
                        color="ocean-blue"
                        title="Bank of New Zealand."
                        bulletSize={30}
                        bullet={<BrandGit size={22} radius="xl" color="green"></BrandGit>}
                    >
                        <div style={{ display: 'flex', padding: 10, margin: 10 }}>
                            <Image src={bnz} style={{ width: 40 }} />
                            <div style={{ display: 'flex', padding: 5 }}>
                                <text style={{ paddingLeft: 5 }}>November 2018 - Current day</text>
                                <Calendar style={{ marginLeft: 5 }} />
                            </div>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item
                        title="Hiplee"
                        bulletSize={30}
                        bullet={<GitCommit size={22} radius="xl"></GitCommit>}
                    >
                        <div>May 2018 - October 2018</div>
                    </Timeline.Item>

                    <Timeline.Item
                        title="Solnet Solutions"
                        bulletSize={30}
                        bullet={<GitCommit size={22} radius="xl"></GitCommit>}
                    >
                        <div>March 2017 - April 2018</div>
                    </Timeline.Item>

                    <Timeline.Item
                        title="BBD Software development"
                        bulletSize={30}
                        bullet={<GitCommit size={22} radius="xl"></GitCommit>}
                    >
                        <div>2010 – 2017</div>
                    </Timeline.Item>

                    <Timeline.Item
                        title="Enerweb"
                        bulletSize={30}
                        bullet={<GitFork size={22} radius="xl"></GitFork>}
                    >
                        <div>2001 - 2010</div>
                    </Timeline.Item>
                </Timeline>
            </div>
        </Container>
    )
}

export default About
