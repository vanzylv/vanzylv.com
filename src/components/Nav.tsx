import { Container, Tabs } from '@mantine/core'
import About from './About'
import Resume from './Resume'
import Contact from './Contact'

function Nav() {
    return (
        <Container>
            <Tabs grow>
                <Tabs.Tab tabKey="/" color="pink" label="About">
                    <About />
                </Tabs.Tab>
                <Tabs.Tab tabKey="/resume" label="Resumé">
                    <Resume />
                </Tabs.Tab>
                <Tabs.Tab tabKey="/contact" color="teal" label="Get in touch">
                    <Contact />
                </Tabs.Tab>
            </Tabs>
        </Container>
    )
}

export default Nav
