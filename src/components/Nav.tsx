import { SimpleGrid, Tabs } from '@mantine/core'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
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
                <Tabs.Tab tabKey="/" color="pink" label="About" />
                <Tabs.Tab tabKey="/resume" label="Resumé" />
                <Tabs.Tab tabKey="/contact" color="teal" label="Get in touch" />
            </Tabs>

            <Routes>
                <Route element={<About />} path="/" />
                <Route element={<Resume />} path="/resume" />
                <Route element={<Contact />} path="/contact" />
            </Routes>

            {/*<Button*/}
            {/*    style={{ background: location.pathname === '/' ? 'aqua' : '' }}*/}
            {/*    component={Link}*/}
            {/*    to="/"*/}
            {/*    variant="outline"*/}
            {/*>*/}
            {/*    About*/}
            {/*</Button>*/}
            {/*<Space w="lg" />*/}
            {/*<Button*/}
            {/*    style={{*/}
            {/*        background: location.pathname === '/resume' ? 'aqua' : '',*/}
            {/*    }}*/}
            {/*    component={Link}*/}
            {/*    to="/resume"*/}
            {/*    variant="outline"*/}
            {/*>*/}
            {/*    Resumé*/}
            {/*</Button>*/}
            {/*<Space w="lg" />*/}
            {/*<Button*/}
            {/*    style={{*/}
            {/*        background: location.pathname === '/contact' ? 'aqua' : '',*/}
            {/*    }}*/}
            {/*    component={Link}*/}
            {/*    to="/contact"*/}
            {/*    variant="outline"*/}
            {/*>*/}
            {/*    Get in touch*/}
            {/*</Button>*/}
        </SimpleGrid>
    )
}

export default Nav
