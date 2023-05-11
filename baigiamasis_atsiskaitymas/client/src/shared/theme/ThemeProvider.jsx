import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

const theme = {
  palette: {
    default: {
      dark: '#cccccc',
      main: '#ededed',
      light: '#fafafa',
    },
    primary: {
      dark: '#00947e',
      main: '#00d1b2',
      light: '#ebfffc',
    },
    secondary: {
      dark: '#296fa8',
      main: '#dbdbdb',
      light: '#eff5fb',
    },
    link: {
      dark: '#3850b7',
      main: '#485fc7',
      light: '#eff1fa',
    },
    info: {
      dark: '#296fa8',
      main: '#3e8ed0',
      light: '#eff5fb',
    },
    success: {
      dark: '#257953',
      main: '#48c78e',
      light: '#effaf5',
    },
    warning: {
      dark: '#946c00',
      main: '#ffe08a',
      light: '#feecf0',
    },
    danger: {
      dark: '#cc0f35',
      main: '#f14668',
      light: '#feecf0',
    },
    dark: {
      main: '#363636',
    },
    light: {
      main: '#ffffff',
    },
    accent: {
      main: '#f5f5f5',
    },
    overlay: {
      light: 'rgba(0,0,0,0.15)',
      main: 'rgba(0,0,0,0.30)',
      dark: 'rgba(0,0,0,0.60)',
    },
  },
};

const ThemeProvider = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
