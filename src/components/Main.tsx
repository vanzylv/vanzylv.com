import { ActionIcon, Container, Grid, Group, useMantineColorScheme } from '@mantine/core'

import { Moon, Sun } from 'tabler-icons-react'
import Nav from './Nav'
import NameTitle from './NameTitle'

function ThemeToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const dark = colorScheme === 'dark'

    return (
        <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
        >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
        </ActionIcon>
    )
}

const Main = () => (
    <Container fluid style={{ margin: 35 }}>
        <Grid gutter="sm">
            <Grid.Col span={3}>
                <NameTitle />
            </Grid.Col>

            <Grid.Col span={6}>
                <Nav />
            </Grid.Col>

            <Grid.Col span={3}>
                <Group position="right">
                    <ThemeToggle />
                </Group>
            </Grid.Col>
        </Grid>
    </Container>
)

export default Main
