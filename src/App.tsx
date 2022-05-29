import React, { useState } from 'react'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'

import Main from './components/Main'
import { BrowserRouter as Router } from 'react-router-dom'

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
                <Router>
                    <Main />
                </Router>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default App
