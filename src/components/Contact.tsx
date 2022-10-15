import { Stack } from '@mantine/core'
import { BrandGithub, BrandLinkedin, Mail } from 'tabler-icons-react'

const Contact = () => (
    <Stack align="start">
        <div style={{ display: 'flex',justifyContent:'center', alignItems:'center' }}>
            <BrandGithub />&nbsp;
            <a href="https://github.com/vanzylv/">Github</a>
        </div>

        <div style={{ display: 'flex',justifyContent:'center', alignItems:'center' }}>
            <BrandLinkedin />&nbsp;
            <a href="https://www.linkedin.com/in/vickus-van-zyl-65932a163/">Linkedin</a>
        </div>

        <div style={{ display: 'flex',justifyContent:'center', alignItems:'center' }}>
            <Mail />&nbsp;
            <a href="mailto:vanzylv@gmail.com">vanzylv@gmail.com</a>
        </div>
    </Stack>
)

export default Contact
