import { createMuiTheme } from '@material-ui/core/styles'

export const colors = {
  black: {
    background: '#030313',
    light: '#090B1B',
    kinda: '#1A1A1A',
    greyish: '#081323'
  },
  blue: {
    accent: '#072E5A',
    base: '#0B2545',
    light: '#66AFF5',
    neon: '#08F7FE'
  },
  gray: {
    base: '#8DA9C4',
    skeletonBackground: '#8E8B8B',
    skeletonField: '#C4C4C4'
  },
  green: {
    main: '#00F9BB',
    hover: 'rgba(0,249,187,0.15)'
  },
  white: {
    main: '#FFFFFF'
  },
  red: {
    main: '#EB5757',
    neon: '#FF2079'
  },
  purple: {
    magenta: '#A1045A',
    orchid: '#AF69EF'
  },
  yellow: {
    neon: '#F5D300'
  }
}
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00F9BB',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#030313'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#030313'
    },
    error: {
      main: '#E15757'
    }
  },
  typography: {
    fontFamily: 'Inter',
    body1: {
      fontSize: 22,
      lineHeight: '40px'
    },
    body2: {
      fontSize: 16
    },
    h1: {
      fontSize: 56
    },
    h2: {
      fontSize: 40
    },
    h3: {
      fontSize: 32
    },
    h4: {
      fontSize: 24
    },
    h5: {
      fontSize: 16
    },
    h6: {
      fontSize: 12
    }
  },
  overrides: {
    // Style sheet name ⚛️
    MuiInputBase: {
      input: {
        MozAppearance: 'textfield',
        '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
          display: 'none'
        }
      }
      // Name of the rule
      //  '& .MuiInputBase-input': {
      //   MozAppearance: 'textfield'
      // }
    }
  }
})
