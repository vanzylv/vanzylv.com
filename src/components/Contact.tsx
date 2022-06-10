import { List, Stack } from '@mantine/core'
import { BrandGithub, BrandLinkedin, Mail } from 'tabler-icons-react'

const About = () => {
    return (
        <Stack>
            <div style={{ display: 'flex' }}>
                <List>
                    <List.Item icon={<BrandGithub />}>
                        {' '}
                        <a href="https://github.com/vanzylv/">Github</a>
                    </List.Item>
                    <List.Item icon={<BrandLinkedin />}>
                        <a href="https://www.linkedin.com/in/vickus-van-zyl-65932a163/">Linkedin</a>
                    </List.Item>
                    <List.Item icon={<Mail />}>
                        <a href="mailto:vanzylv@gmail.com">vanzylv@gmail.com</a>
                    </List.Item>
                </List>
            </div>
        </Stack>
    )
}

export default About
