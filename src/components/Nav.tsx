import { SimpleGrid, Tabs } from '@mantine/core'
import { useLocation, useNavigate } from 'react-router-dom'
import About from './About'
import Resume from './Resume'
import Contact from './Contact'

function Nav() {
    const location = useLocation()
    const navigate = useNavigate()

    const paths = ['/', '/resume', '/contact']

    return (
        <SimpleGrid>
            <Tabs
                active={paths.indexOf(location.pathname)}
                grow
                onTabChange={(tabIndex, tabKey) => {
                    navigate(tabKey + '')
                }}
            >
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
        </SimpleGrid>
    )
}

export default Nav
