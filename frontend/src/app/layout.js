"use client"

import { useState , useMemo, useEffect } from 'react';
import Head from 'next/head';

import Box from '@mui/material/Box';
import ToolBar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ColorModeContext } from '@/context/ColorModeContext';

import Header from '@/components/Header';

export default function RootLayout ({ children }) {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');

        if(currentTheme) 
            setMode(currentTheme)
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', mode);
    }, [mode])

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
        }), []
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    return (
        <html lang="en">
            <ColorModeContext.Provider value={{ colorMode, mode }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                        <body>
                            <Header />
                            <ToolBar />
                            <Box
                                sx={{ margin: 2.5 }}
                            >
                                <Container
                                    maxWidth='xl'
                                >
                                    {children}
                                </Container>
                            </Box>
                        </body>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </html>
    );
}