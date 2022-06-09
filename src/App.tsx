import React, { useState } from 'react'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'

import Main from './components/Main'

function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                theme={{ colorScheme, fontFamily: 'Sriracha,sans-serif' }}
                withGlobalStyles
                withNormalizeCSS
            >
                <Main />
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default App
