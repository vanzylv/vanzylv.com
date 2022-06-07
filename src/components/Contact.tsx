import { List, Stack, Transition } from '@mantine/core'
import { BrandGithub, BrandLinkedin, Mail } from 'tabler-icons-react'
import { useState } from 'react'

const About = () => {
    const [trans, setTrans] = useState(false)

    return (
        <Transition
            onExit={() => setTrans(true)}
            mounted={trans}
            transition="pop"
            duration={200}
            timingFunction="ease"
        >
            {(styles) => (
                <Stack style={styles}>
                    <div style={{ display: 'flex' }}>
                        <List>
                            <List.Item icon={<BrandGithub />}>
                                {' '}
                                <a href="https://github.com/vanzylv/">Github</a>
                            </List.Item>
                            <List.Item icon={<BrandLinkedin />}>
                                <a href="https://www.linkedin.com/in/vickus-van-zyl-65932a163/">
                                    Linkedin
                                </a>
                            </List.Item>
                            <List.Item icon={<Mail />}>
                                <a href="mailto:vanzylv@gmail.com">vanzylv@gmail.com</a>
                            </List.Item>
                        </List>
                    </div>
                </Stack>
            )}
        </Transition>
    )
}

export default About
