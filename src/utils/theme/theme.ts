'use client';
import { createTheme } from '@mui/material/styles';
import { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local'

const iranSans: NextFont = localFont({ src: '../../../public/fonts/iransans/iransans.ttf' })

const theme = createTheme({
    direction: 'rtl',
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
        },
    },
    typography: {
        fontFamily: iranSans.style.fontFamily,
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginBottom: "0.375rem",
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    position: "absolute",
                    bottom: "-1.313rem",
                    margin: 0,
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                    fontSize: "1rem",
                    fontWeight: "600",
                    borderRadius: "0",
                }
            }
        },
    }
});

export default theme;