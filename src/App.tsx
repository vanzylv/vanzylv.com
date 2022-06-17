import React, { useState } from 'react'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'

import Main from './components/Main'
import { RecoilRoot } from 'recoil'

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                theme={{ colorScheme, fontFamily: "font-family: 'Rubik', sans-serif;" }}
                withGlobalStyles
                withNormalizeCSS
            >
                <RecoilRoot>
                    <Main />
                </RecoilRoot>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default App
