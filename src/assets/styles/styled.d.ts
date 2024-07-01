import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secundary: string;
      background: string;
    };
    fonts: {
      playWrite: string;
      openSans: string;
      candal: string;
      poppins: string;
    };
    fontSizes: {
    };
    borderRadius: {
    };
    boxShadow: {
    };
    breakpoints: {
    };
  }
}
