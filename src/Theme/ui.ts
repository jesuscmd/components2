const breakpoints = {
    xs: '320px',
    sm: '425px',
    md: '768px',
    lg: '1024px',
    xl: '2560px',
  };
  
  export type BreakpointsType = typeof breakpoints;
  
  type BreakpointName = keyof typeof breakpoints;
  const breakpointNames: BreakpointName[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  
  function breakpointNext(name: BreakpointName): BreakpointName | null {
    const index = breakpointNames.indexOf(name);
    if (index === -1) {
      throw new Error(`breakpoint "${name}" not found`);
    }
    return index < breakpointNames.length - 1 ? breakpointNames[index + 1] : null;
  }
  
  function breakpointMin(name: BreakpointName): string | null {
    const val = breakpoints[name];
    return val || null;
  }
  
  function breakpointMax(name: BreakpointName): string | null {
    const val = breakpoints[name];
    if (!val) return null;
    
    const num = parseFloat(val);
    return num > 0 ? `${(num - 0.02).toFixed(2)}px` : null;
  }
  
  function mediaBreakpointUp(name: BreakpointName): string {
    const min = breakpointMin(name);
    return min ? `@media (min-width: ${min})` : '';
  }
  
  function mediaBreakpointDown(name: BreakpointName): string {
    const max = breakpointMax(name);
    return max ? `@media (max-width: ${max})` : '';
  }
  
  function mediaBreakpointBetween(lower: BreakpointName, upper: BreakpointName): string {
    const min = breakpointMin(lower);
    const max = breakpointMax(upper);
  
    if (min && max) {
      return `@media (min-width: ${min}) and (max-width: ${max})`;
    } else if (!max) {
      return mediaBreakpointUp(lower);
    } else if (!min) {
      return mediaBreakpointDown(upper);
    }
  
    return '';
  }
  
  function mediaBreakpointOnly(name: BreakpointName): string {
    const min = breakpointMin(name);
    const next = breakpointNext(name);
    const max = next ? breakpointMax(next) : null;
  
    if (min && max) {
      return `@media (min-width: ${min}) and (max-width: ${max})`;
    } else if (!max) {
      return mediaBreakpointUp(name);
    } else if (!min) {
      return mediaBreakpointDown(next!);
    }
  
    return '';
  }
  
  
  
  
  
  export const devices = {
    mobile: `(min-width: ${breakpoints.xs})`,
    mobileLandscape: `(min-width: ${breakpoints.sm})`,
    tablet: `(min-width: ${breakpoints.md})`,
    tabletLandscape: `(min-width: ${breakpoints.lg})`,
    laptop: `(min-width: ${breakpoints.lg})`,
    desktop: `(min-width: ${breakpoints.xl})`,
   
    up: mediaBreakpointUp,
    down: mediaBreakpointDown,
    between: mediaBreakpointBetween,
    only: mediaBreakpointOnly,
  };
  
  export const common = {
    white: '#fafafa', // casi blanco
    black: "#000",
    
    grayLight: '#e0e0e0', // gris claro
    gray: '#929292', // gris
    grayDark: '#4c4c4c', // gris oscuro
    
    darkLight: "#262626", // negro claro
    dark: '#1a1a1a', // negro medio
    darkDark: "#000",
  };
  
  
  
  
  
  
  /**
   * 
   * Aquí es posible cambiar los colores:
   * 
   * basic
   * primary
   * secodnary
   * 
   * en 3 tonos
   * 
   * light
   * main
   * dark
   */
  export const basicColors = {
    light: "#9d9d9d",
    main: "#777777", 
    dark: "#515151",  
  }
  
  export const primaryColors = {
    light: "#0085b8", // azul, tonalidades
    main: "#0057b8", 
    dark: "#003f85",
  }
  
  export const secondaryColors = {
    light: "#d0b991", // cafe dorado, tonalidades
    main: "#b9975b", 
    dark: "#8c6f3c",
  }
  
  export interface IDevices {
    mobile: string,
    mobileLandscape: string,
    tablet: string,
    tabletLandscape: string,
    laptop: string,
    desktop: string,
    up: Function,
    down: Function,
    between: Function,
    only: Function,
  };
  
  export interface ITone {
    light: string,
    main: string,
    dark: string,
  }
  
  export interface Theme {
    name: string,
    devices: IDevices,
    breakpoints: BreakpointsType,
    mins: {
      toolbar: {
        minHeight: string,
      }
    },
    palette: {
      white: string,
      black: string,
      gray: ITone,
      dark: ITone,
      basic: ITone,
      primary: ITone,
      secondary: ITone,
      error: ITone,
      warning: ITone,
      info: ITone,
      success: ITone,
      semaphore: {
        go: ITone,
        warning: ITone,
        stop: ITone
      }
    },
    typography: {
      fontFamily: Array<string>,
      fontWeightLight: number,
      fontWeightRegular: number,
      fontWeightMedium: number,
      fontWeightBold: number,
      elements: {
        h1: string,
        h2: string,
        h3: string,
        h4: string,
        h5: string,
        h6: string,
        title: string,
        subtitle1: string,
        subtitle2: string,
        body1: string,
        body2: string,
        footer: string,
      }
    },
    colorText: {
      basic: string,
      primary: string,
      secondary: string,
      disabled: string,
      hint: string,
      icon: string,
      exalt: string,
    },
    background: {
      paper: string, //base primaria
      paper2: string, //base secundaria
      forms: string, // cosas, componentes
      forms2: string, // cosas, componentes secundario
      default: string, // default
      transparent: string, //transparente
    },
    action: {
      active: string,
      hover: string,
      hoverOpacity: number,
      selected: string,
      selectedOpacity: number,
      disabled: string,
      disabledBackground: string,
      disabledOpacity: number,
      focus: string,
      focusOpacity: number,
      activatedOpacity: number,
    },
    other: object
  }
  export const DarkDesertTheme: Theme = { // tema oscuro
    name: "DarkDesertTheme", // nombre tema oscuro
    breakpoints: breakpoints,
    devices: devices,
    mins: {
      toolbar: {
        minHeight: "64px",
      },
    },
    palette: {
      white: common.white,
      black: common.dark,
      gray:{
        light: common.grayLight,
        main: common.gray, 
        dark: common.grayDark,
      },
      dark: {
        light: common.darkLight,
        main: common.dark, 
        dark: common.darkDark,
      },
      basic: {
        light: basicColors.light,
        main: basicColors.main, 
        dark: basicColors.dark, 
      },
      primary: {
        light: primaryColors.light, // azul, tonalidades
        main: primaryColors.main, 
        dark: primaryColors.dark,
      },
      secondary: {
        light: secondaryColors.light, // cafe dorado, tonalidades
        main: secondaryColors.main, 
        dark: secondaryColors.dark,
      },
      error: {
        light: "#f5c2c7",
        main: "#f8d7da",
        dark: "#842029",
      },
      warning: {
        light: "#ffecb5",
        main: "#fff3cd",
        dark: "#664d03",
      },
      info: {
        light: "#b6effb",
        main: "#cff4fc",
        dark: "#055160",
      },
      success: {
        light: "#badbcc",
        main: "#d1e7dd",
        dark: "#0f5132",
      },
      semaphore: {
        go: {
          light: "#00FF00",
          main: "#99CC33",
          dark: "#7AA328",
        },
        warning: {
          light: "#FFFF00",
          main: "#FFCC00",
          dark: "#CCA300",
        },
        stop: {
          light: "#FF0000",
          main: "#CC3300",
          dark: "#A32800",
        },
      }
    },
    typography: {
      fontFamily: [
        '"montserrat"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ],
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      elements: {
        h1: "2.5rem",
        h2: "2rem",
        h3: "1.35rem",
        h4: "1.15rem",
        h5: "1.05rem",
        h6: "1rem",
        title: "22px",
        subtitle1: "20px",
        subtitle2: "18px",
        body1: "12px",
        body2: "14px",
        footer: "12px",
      }
    },
    colorText: {
      basic: common.grayDark, // uso de los tonos base
      primary: common.white, // uso de los tonos base
      secondary: common.grayLight, // uso de los tonos base
      disabled: common.gray, // uso de los tonos base
      exalt: "#", //
      hint: "#", // 
      icon: "#", // 
    },
    background: {
      paper: common.dark, // uso de los tonos base
      paper2: common.darkLight, // uso de los tonos base
      forms: common.grayDark, // fondo secundario
      forms2: common.grayDark, // lo ocuparé?
      default: common.gray, // lo ocuparé?
      transparent: "transparent", // transparente
    },
    action: { // ocuparlos
      active: common.white,
      hover: common.gray,
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(222, 226, 230, 0.41)',
      disabledOpacity: 0.38,
      focus: 'rgb(224 224 224 / 25%)',
      focusOpacity: 0.25,
      activatedOpacity: 0.24,
    },
    other: {}
  };
  
  
  export const DesertTheme: Theme = { // tema claro
    name: "DesertTheme", // nombre tema claro
    breakpoints: breakpoints,
    devices: devices,
    mins: {
      toolbar: {
        minHeight: "64px",
      },
    },
    palette: {
      white: common.white,
      black: common.black,
      gray:{
        light: common.grayLight,
        main: common.gray, 
        dark: common.grayDark,
      },
      dark: {
        light: common.darkLight,
        main: common.dark, 
        dark: common.darkDark,
      },
      basic: {
        light: basicColors.light,
        main: basicColors.main, 
        dark: basicColors.dark,
      },
      primary: {
        light: primaryColors.light, // azul, tonalidades
        main: primaryColors.main, 
        dark: primaryColors.dark,
      },
      secondary: {
        light: secondaryColors.light, // cafe dorado, tonalidades
        main: secondaryColors.main, 
        dark: secondaryColors.dark,
      },
      error: {
        light: "#f5c2c7",
        main: "#f8d7da",
        dark: "#842029",
      },
      warning: {
        light: "#ffecb5",
        main: "#fff3cd",
        dark: "#664d03",
      },
      info: {
        light: "#b6effb",
        main: "#cff4fc",
        dark: "#055160",
      },
      success: {
        light: "#badbcc",
        main: "#d1e7dd",
        dark: "#0f5132",
      },
      semaphore: {
        go: {
          light: "#00FF00",
          main: "#99CC33",
          dark: "#7AA328",
        },
        warning: {
          light: "#FFFF00",
          main: "#FFCC00",
          dark: "#CCA300",
        },
        stop: {
          light: "#FF0000",
          main: "#CC3300",
          dark: "#A32800",
        },
      }
    },
    typography: {
      fontFamily: [
        '"montserrat"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ],
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      elements: {
        h1: "2.5rem",
        h2: "2rem",
        h3: "1.35rem",
        h4: "1.15rem",
        h5: "1.05rem",
        h6: "1rem",
        title: "22px",
        subtitle1: "20px",
        subtitle2: "18px",
        body1: "12px",
        body2: "14px",
        footer: "12px",
      }
    },
    colorText: {
      basic: common.grayLight, // uso de los tonos base
      primary: common.dark, // uso de los tonos base
      secondary: common.grayDark, // uso de los tonos base
      disabled: common.gray, // uso de los tonos base
      exalt: "#", //     
      hint: "#", // 
      icon: "#", // 
    },
    background: {
      paper: common.white, // uso de los tonos base
      paper2: common.grayLight, // uso de los tonos base
      forms: common.grayLight,  // fondo secundario
      forms2: common.grayLight, // lo ocuparé?
      default: common.gray, // lo ocuparé?
      transparent: "transparent", // transparente
    },
    action: { // ocuparlos
      active: common.white,
      hover: common.gray,
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(222, 226, 230, 0.41)',
      disabledOpacity: 0.38,
      focus: 'rgb(224 224 224 / 75%)',
      focusOpacity: 0.25,
      activatedOpacity: 0.24,
    },
    other: {}
  }
  
  export default DesertTheme;