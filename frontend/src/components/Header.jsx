import { useContext } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { ColorModeContext } from '@/context/ColorModeContext';

import { useTheme } from '@mui/material/styles';

import styles from '@/styles/layout.module.css'

export default function Header () {
    const { colorMode } = useContext(ColorModeContext)
    const theme = useTheme();

    return (
        <AppBar>
            <Toolbar className={styles.header}>
                <Typography variant="h6">Bio-Analitycs</Typography>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}