import {
    Accordion,
    Badge,
    Container,
    Grid,
    Group,
    Image,
    Text,
    useMantineColorScheme,
} from '@mantine/core'
import { Calendar } from 'tabler-icons-react'
import { Employer, Endeavour } from '../interfaces/EmployerInterface'

function EmployerWidget({ dateStart, dateEnd, role, logo, endeavours }: Employer) {
    const { colorScheme } = useMantineColorScheme()

    return (
        <Container
            style={{
                padding: 5,
                marginTop: 20,
                borderStyle: 'solid',
                borderRadius: 5,
                borderWidth: 0.1,
                borderColor: '#373A40',
            }}
        >
            <Grid
                sx={(theme) => ({
                    borderRadius: 5,
                    backgroundColor:
                        colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
                })}
                style={{ padding: 5, margin: 5 }}
            >
                <Grid.Col span={6}>
                    <Group position="left">
                        <Image radius="md" src={logo} style={{ width: 60 }} />
                        <Text size="xl">{role}</Text>
                    </Group>
                </Grid.Col>

                <Grid.Col span={6}>
                    <Group position="right">
                        <Text size="xl">
                            {dateStart} - {dateEnd}
                        </Text>
                        <Calendar />
                    </Group>
                </Grid.Col>
            </Grid>
            <Accordion style={{ padding: 5 }} iconPosition="right" disableIconRotation multiple>
                {endeavours.map((item: Endeavour, index) => (
                    <Accordion.Item key={index} label={item.project}>
                        <div>{item.description}</div>
                        <Group position="right" style={{ marginTop: 5, paddingTop: 5 }}>
                            {item.tags.map((devTag, _index) => {
                                return (
                                    <Badge
                                        key={_index}
                                        variant="gradient"
                                        gradient={{ from: 'indigo', to: 'cyan' }}
                                    >
                                        {devTag}
                                    </Badge>
                                )
                            })}
                        </Group>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    )
}

export default EmployerWidget
