import { Container, Text, Transition } from '@mantine/core'
import { useState } from 'react'

const About = () => {
    const [trans, setTrans] = useState(false)

    return (
        // <Transition
        //     onExit={() => setTrans(true)}
        //     mounted={trans}
        //     transition="pop"
        //     duration={150}
        //     timingFunction="ease"
        // >
        //     {(styles) => (
                <Container>
                    <Text size="xl">Greetings.</Text>
                    <br />
                    <Text>
                        I've been a software developer since 2001. I've had the opportunity to work
                        on a wide variety of projects alongside many talented developers.
                        From the early days where web pages were rendered on the server (the first
                        time), the best browser around was Internet Explorer 5 and PHP 3 was a
                        popular scripting language of choice, to where are today.
                        <br />
                        <br />
                        Over the years I've been exposed to technologies as they came and went. With
                        some sticking around longer than others.
                        <br />
                        <br />
                        My day to day work has mostly settled around building rich user interfaces
                        for the web and micro services, with React and Springboot being the tools of
                        choice. Please see my Resumé for more information.
                        <br />
                        <br />
                        Regards, Vickus van Zyl
                    </Text>
                </Container>
        //     )}
        // </Transition>
    )
}

export default About
