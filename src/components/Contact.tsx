import { Stack } from '@mantine/core'
import { BrandGithub, BrandLinkedin, Mail } from 'tabler-icons-react'

const Contact = () => (
    <Stack align="start">
        <div>
            <BrandGithub />
            <a href="https://github.com/vanzylv/">Github</a>
        </div>

        <div>
            <BrandLinkedin />
            <a href="https://www.linkedin.com/in/vickus-van-zyl-65932a163/">Linkedin</a>
        </div>

        <div>
            <Mail />
            <a href="mailto:vanzylv@gmail.com">vanzylv@gmail.com</a>
        </div>
    </Stack>
)

export default Contact
