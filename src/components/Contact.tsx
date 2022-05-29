import { Container, Divider, Image, List } from '@mantine/core'
import { BrandGithub, BrandLinkedin, Mail } from 'tabler-icons-react'

const About = () => {
    return (
        <Container style={{ padding: 10, marginTop: 10 }}>
            <div>Contact.</div>
            <Divider my="sm" />

            <div style={{ display: 'flex' }}>
                <List>
                    <List.Item icon={<BrandGithub />}> <a href="https://github.com/vanzylv/">Github</a></List.Item>
                    <List.Item icon={<BrandLinkedin />}>
                        <a href="https://www.linkedin.com/in/vickus-van-zyl-65932a163/">Linkedin</a>
                    </List.Item>
                    <List.Item icon={<Mail />}><a href="mailto:vanzylv@gmail.com">vanzylv@gmail.com</a></List.Item>
                </List>
            </div>
        </Container>
    )
}

export default About
