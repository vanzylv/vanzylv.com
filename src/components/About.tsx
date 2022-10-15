import { Text, Image } from '@mantine/core'
// @ts-ignore
import saaImg from '../assets/aws-certified-solutions-architect-associate.png'
// @ts-ignore
import cpImg from '../assets/aws-certified-cloud-practitioner.png'

const About = () => {
    return (
        <div>
            <Text size="xl">Greetings.</Text>
            <br />
            <Text>
                I've been a software developer since 2001. I've had the opportunity to work on a
                wide variety of projects alongside many talented developers. From the early days
                when web pages were rendered on the server (the first time), the best browser around
                was Internet Explorer 5 and PHP 3 was a popular scripting language of choice, to
                where we are today.
                <br />
                <br />
                Over the years I've been exposed to technologies as they came and went. With some
                sticking around longer than others.
                <br />
                <br />
                My day to day work has mostly settled around building rich user interfaces for the
                web and micro services, with React and Springboot being the tools of choice. Please
                see my Resumé for more information.
                <br />
                <br />
                Regards, Vickus van Zyl
            </Text>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image height={120} width={120} radius="md" src={saaImg} />
                <Image height={120} width={120} radius="md" src={cpImg} />
            </div>

        </div>
    )
}

export default About
