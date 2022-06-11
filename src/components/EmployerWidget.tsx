import {
    Badge,
    Container,
    Divider,
    Grid,
    Group,
    Image,
    Indicator,
    Paper,
    Stack,
    Text,
    useMantineColorScheme,
} from '@mantine/core'
import { Calendar } from 'tabler-icons-react'
import { Employer, Endeavour } from '../interfaces/EmployerInterface'
import { DevTag, DevTags } from '../interfaces/DevTagsInterface'

const tagData: DevTags = require('../data/tags.json')

interface CategoryFilter extends Employer {
    category: string
    subCategory: string
    setSubCategory: Function
}

function EmployerWidget({
    dateStart,
    dateEnd,
    role,
    logo,
    endeavours,
    category,
    subCategory,
    setSubCategory,
}: CategoryFilter) {
    const { colorScheme } = useMantineColorScheme()
    const devTagHit: DevTag = tagData.tags.find((tag) => tag.category === category)!

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
            <Container style={{ padding: 5 }}>
                {endeavours.map((item: Endeavour, index) => (
                    <Stack key={index}>
                        <Paper>
                            <Stack>
                                <b>{item.project}</b>
                                {item.description}
                            </Stack>
                        </Paper>
                        <Group position="right" style={{ marginTop: 5, paddingTop: 5 }}>
                            {item.tags.map((devTag, _index) => {
                                let hit =
                                    devTagHit &&
                                    devTagHit.frameworks.some((test) => test.name === devTag)

                                if (subCategory !== 'all') {
                                    hit = devTag === subCategory
                                }

                                return hit ? (
                                    <Indicator color="green">
                                        <Badge
                                            variant="outline"
                                            size="lg"
                                            color={'red'}
                                            key={_index}
                                        >
                                            {devTag}
                                        </Badge>
                                    </Indicator>
                                ) : (
                                    <Badge
                                        onClick={() => setSubCategory(devTag)}
                                        style={{ cursor: 'hand' }}
                                        color={'blue'}
                                        key={_index}
                                    >
                                        {devTag}
                                    </Badge>
                                )
                            })}
                        </Group>
                        <Divider style={{ margin: 10 }} />
                    </Stack>
                ))}
            </Container>
        </Container>
    )
}

export default EmployerWidget
