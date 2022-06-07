import {
    ActionIcon,
    Container,
    Grid,
    Group,
    Image,
    List,
    Popover,
    Space,
    useMantineColorScheme,
} from '@mantine/core'

import { Moon, QuestionMark, Sun } from 'tabler-icons-react'
import { useState } from 'react'
import Nav from './Nav'
import NameTitle from './NameTitle'

const s3 = require('../assets/s3_16.png')
const dynamodb = require('../assets/dynamo_16.png')

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

const Main = () => {
    const [opened, setOpened] = useState(false)
    return (
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

                        <Popover
                            opened={opened}
                            onClose={() => setOpened(false)}
                            target={
                                <ActionIcon onClick={() => setOpened((o) => !o)}>
                                    <QuestionMark />
                                </ActionIcon>
                            }
                            position="bottom"
                            placement="end"
                        >
                            <Container>Developed and deployed on</Container>
                            <Space h={'xs'} />

                            <div style={{ display: 'flex' }}>
                                <List>
                                    <List.Item icon={<Image src={s3} />}>Aws S3</List.Item>
                                    <List.Item icon={<Image src={dynamodb} />}>DynamoDB</List.Item>
                                </List>
                            </div>
                        </Popover>
                    </Group>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default Main
