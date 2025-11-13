import { createTheme } from '@mui/material';
import { dark } from '@mui/material/styles/createPalette';
import { create } from 'domain';

export const LightTheme = createTheme({
    palette: {
        primary: {
        main: '#E63946',       // vermelho principal
        light: '#FF6B6B',      // vermelho claro
        dark: '#B71C1C',       // vermelho escuro
        contrastText: '#FFFFFF'
        },

        secondary: {
        main: '#F1A208',       // amarelo mostarda
        light: '#FFD54F',      // amarelo claro
        dark: '#C17900',       // amarelo queimado
        contrastText: '#000000'
        },

        background: {
        default: '#FFF8F0',    // fundo geral
        paper: '#FFFFFF',      // fundo de cards
        },

        text: {
        primary: '#212121',
        secondary: '#555555',
        },

        success: {
        main: '#2E7D32',
        contrastText: '#FFFFFF',
        },

        error: {
        main: '#C62828',
        contrastText: '#FFFFFF',
        },
    }
})