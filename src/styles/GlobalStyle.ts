import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	:root {
    --font-main: 'Inter', sans-serif;

    --color-bg: #ffffff;
    --color-text-primary: #333333;
    --color-text-secondary: #666666;
    --color-price: #2c3e50;
    --color-border: #e0e0e0;
    --color-shadow-light: rgba(0, 0, 0, 0.1);
    --color-shadow-hover: rgba(0, 0, 0, 0.15);
    --color-img-bg: #f5f5f5;

    --radius-base: 8px;
    --gap-base: 16px;
    --gap-small: 8px;

    --transition-fast: 0.2s ease;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    font-family: var(--font-main);
    background-color: var(--color-bg);
    color: var(--color-text-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    display: block;
  }
`
