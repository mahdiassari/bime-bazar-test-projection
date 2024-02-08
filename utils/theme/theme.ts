'use client';
import { createTheme } from '@mui/material/styles';
import { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local'

const iranSans: NextFont = localFont({ src: '../../public/fonts/iransans/iransans.ttf' })

const theme = createTheme({
    typography: {
        fontFamily: iranSans.style.fontFamily,
    },
});

export default theme;