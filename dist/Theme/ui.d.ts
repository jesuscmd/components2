declare const breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
export type BreakpointsType = typeof breakpoints;
type BreakpointName = keyof typeof breakpoints;
declare function mediaBreakpointUp(name: BreakpointName): string;
declare function mediaBreakpointDown(name: BreakpointName): string;
declare function mediaBreakpointBetween(lower: BreakpointName, upper: BreakpointName): string;
declare function mediaBreakpointOnly(name: BreakpointName): string;
export declare const devices: {
    mobile: string;
    mobileLandscape: string;
    tablet: string;
    tabletLandscape: string;
    laptop: string;
    desktop: string;
    up: typeof mediaBreakpointUp;
    down: typeof mediaBreakpointDown;
    between: typeof mediaBreakpointBetween;
    only: typeof mediaBreakpointOnly;
};
export declare const common: {
    white: string;
    black: string;
    grayLight: string;
    gray: string;
    grayDark: string;
    darkLight: string;
    dark: string;
    darkDark: string;
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
export declare const basicColors: {
    light: string;
    main: string;
    dark: string;
};
export declare const primaryColors: {
    light: string;
    main: string;
    dark: string;
};
export declare const secondaryColors: {
    light: string;
    main: string;
    dark: string;
};
export interface IDevices {
    mobile: string;
    mobileLandscape: string;
    tablet: string;
    tabletLandscape: string;
    laptop: string;
    desktop: string;
    up: Function;
    down: Function;
    between: Function;
    only: Function;
}
export interface ITone {
    light: string;
    main: string;
    dark: string;
}
export interface Theme {
    name: string;
    devices: IDevices;
    breakpoints: BreakpointsType;
    mins: {
        toolbar: {
            minHeight: string;
        };
    };
    palette: {
        white: string;
        black: string;
        gray: ITone;
        dark: ITone;
        basic: ITone;
        primary: ITone;
        secondary: ITone;
        error: ITone;
        warning: ITone;
        info: ITone;
        success: ITone;
        semaphore: {
            go: ITone;
            warning: ITone;
            stop: ITone;
        };
    };
    typography: {
        fontFamily: Array<string>;
        fontWeightLight: number;
        fontWeightRegular: number;
        fontWeightMedium: number;
        fontWeightBold: number;
        elements: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            title: string;
            subtitle1: string;
            subtitle2: string;
            body1: string;
            body2: string;
            footer: string;
        };
    };
    colorText: {
        basic: string;
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
        icon: string;
        exalt: string;
    };
    background: {
        paper: string;
        paper2: string;
        forms: string;
        forms2: string;
        default: string;
        transparent: string;
    };
    action: {
        active: string;
        hover: string;
        hoverOpacity: number;
        selected: string;
        selectedOpacity: number;
        disabled: string;
        disabledBackground: string;
        disabledOpacity: number;
        focus: string;
        focusOpacity: number;
        activatedOpacity: number;
    };
    other: object;
}
export declare const DarkDesertTheme: Theme;
export declare const DesertTheme: Theme;
export default DesertTheme;
