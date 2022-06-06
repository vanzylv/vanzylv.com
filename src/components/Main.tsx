import {
    ActionIcon,
    Container,
    Group,
    Image,
    List,
    Popover,
    SimpleGrid,
    Space,
    useMantineColorScheme,
} from '@mantine/core'

import { Moon, QuestionMark, Sun } from 'tabler-icons-react'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import About from './About'
import Resume from './Resume'
import Contact from './Contact'
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
            <NameTitle />
            <SimpleGrid cols={3}>
                <div>&nbsp;</div>
                <Nav />
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
            </SimpleGrid>

            <Routes>
                <Route element={<About />} path="/" />
                <Route element={<Resume />} path="/resume" />
                <Route element={<Contact />} path="/contact" />
            </Routes>
        </Container>
    )
}

export default Main
