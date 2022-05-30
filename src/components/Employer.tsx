import { Image } from '@mantine/core'
import { Calendar } from 'tabler-icons-react'
const bnz = require('../assets/bnz.jpg')

function Employer() {
    return (
        <div style={{ display: 'flex', padding: 10, margin: 10 }}>
            <Image src={bnz} style={{ width: 40 }} />
            <div style={{ display: 'flex', padding: 5 }}>
                <text style={{ paddingLeft: 5 }}>November 2018 - Current day</text>
                <Calendar style={{ marginLeft: 5 }} />
            </div>
        </div>
    )
}

export default Employer
