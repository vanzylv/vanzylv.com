import { Text } from '@mantine/core'

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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div
                    data-iframe-width="150"
                    data-iframe-height="270"
                    data-share-badge-id="fc7bf40e-bd4a-4ba7-b8d2-487b502b1cb0"
                    data-share-badge-host="https://www.credly.com"
                >
                    &nbsp;
                </div>
                &nbsp; &nbsp;
                <div
                    data-iframe-width="150"
                    data-iframe-height="270"
                    data-share-badge-id="db5f3a87-8f77-4a23-89c5-d22ffd423577"
                    data-share-badge-host="https://www.credly.com"
                >
                    &nbsp;
                </div>
            </div>
        </div>
    )
}

export default About
