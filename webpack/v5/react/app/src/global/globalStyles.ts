import { createGlobalStyle } from 'styled-components';
import { generatorReset } from '@/styles/reset';

const resetCSS = generatorReset(false);

const GlobalStyles = createGlobalStyle`${resetCSS}`;

export default GlobalStyles;
