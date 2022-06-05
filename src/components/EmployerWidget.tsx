import {
    Accordion,
    Center,
    Container,
    Image,
    SimpleGrid,
    Text,
    useMantineColorScheme,
} from '@mantine/core'
import { Calendar } from 'tabler-icons-react'
import { Employer, Endeavour } from '../interfaces/EmployerInterface'

function EmployerWidget({ dateStart, dateEnd, role, logo, endeavours }: Employer) {
    const { colorScheme } = useMantineColorScheme()

    return (
        <>
            <SimpleGrid
                sx={(theme) => ({
                    borderRadius: 5,
                    backgroundColor:
                        colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
                })}
                cols={2}
                style={{ padding: 10, margin: 10 }}
            >
                <div>
                    <Image src={logo} style={{ width: 40 }} />
                    {role}
                </div>
                <Text style={{ paddingLeft: 5 }}>
                    {dateStart} - {dateEnd}
                    <Calendar style={{ marginLeft: 5 }} />
                </Text>
            </SimpleGrid>
            <Container style={{ padding: 10, marginTop: 10 }}>
                <SimpleGrid cols={1}>
                    {endeavours.map((item: Endeavour, index) => (
                        <div key={index}>
                            {item.project} {item.description}
                        </div>
                    ))}
                </SimpleGrid>
            </Container>
        </>
    )
}

export default EmployerWidget
