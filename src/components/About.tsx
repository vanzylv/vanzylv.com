import { Container, Divider } from '@mantine/core'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <Container style={{ padding: 10, marginTop: 10 }}>
            <div>Greetings.</div>
            <Divider my="sm" />
            <text>
                I've been a software developer since 2001. I've had the opportunity to work on a
                wide variety of software projects alongside many talented developers. From the early
                days where web pages were rendered on the server (the first time), the best browser
                around was Internet Explorer 5 and PHP 3 was a popular scripting language of choice.
                <br />
                <br />
                Over the years I've been exposed to technologies as they came and went. With some
                sticking around longer than others.
                <br />
                <br />
                My day to day work has mostly settled around building rich user interfaces for the
                web and micro services with React and Springboot being the tools of choice. Please
                see my <Link to="/resume">Resumé</Link> for more information.
                <br />
                <br />
                Regards, Vickus van Zyl
            </text>
        </Container>
    )
}

export default About
