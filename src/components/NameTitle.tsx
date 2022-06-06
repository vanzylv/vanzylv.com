import { Container, Group, Image, Text } from '@mantine/core'
import { Gps } from 'tabler-icons-react'

const image = require('../assets/vanzylv.PNG')

function NameTitle() {
    return (
        <Container style={{ padding: 10, margin: 10, position: 'absolute' }}>
            <Text size="xl">Vickus van Zyl.</Text>
            <Text style={{ paddingTop: 5, paddingBottom: 5 }} size="sm">
                Software developer.
            </Text>
            <Image radius="md" width={200} src={image} />
            <Group spacing="sm" style={{ paddingTop: 10 }}>
                <Gps />
                <Text>Wellington, New Zealand</Text>
            </Group>
        </Container>
    )
}

export default NameTitle
