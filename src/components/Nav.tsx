import { Button, Center, Space } from '@mantine/core'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
    const location = useLocation()

    return (
        <Center>
            <Button
                style={{ background: location.pathname === '/' ? 'aqua' : '' }}
                component={Link}
                to="/"
                variant="outline"
            >
                About
            </Button>
            <Space w="lg" />
            <Button
                style={{
                    background: location.pathname === '/resume' ? 'aqua' : '',
                }}
                component={Link}
                to="/resume"
                variant="outline"
            >
                Resumé
            </Button>
            <Space w="lg" />
            <Button
                style={{
                    background: location.pathname === '/contact' ? 'aqua' : '',
                }}
                component={Link}
                to="/contact"
                variant="outline"
            >
                Get in touch
            </Button>
            <Space w="lg" />
        </Center>
    )
}

export default Nav
