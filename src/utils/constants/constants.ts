import backgroundEffect1 from "../../assets/images/background-effect-1.png"
import backgroundEffect2 from "../../assets/images/background-effect-2.png"
import logoColors from "../../assets/images/logo-colors.png"
import logoWhite from "../../assets/images/logo-white.png"
import logoBlack from "../../assets/images/logo-black.png"
import logoBackgroundColors from "../../assets/images/logo-background-white.svg"
import logoBackgroundBlack from "../../assets/images/logo-background-black.svg"
import frontEnd from "../../assets/images/front-end.png"
import backEnd from "../../assets/images/back-end.png"

export const LOCALSTORAGE_TOKEN_KEY = "portfolio-token";
export const LOCALSTORAGE_SEARCH_KEY = "searches";
export const LOCALSTORAGE_REMENBER_KEY = "portfolio-remembered-email";

//Mínimo 8 caracteres, pelo menos uma letra, um número e um caracter especial (@$!%*#?&)
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const SIZES = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  desktop: '1024px',
};

export const DEVICE = {
  mobileS: `(min-width: ${SIZES.mobileS})`,
  mobileM: `(min-width: ${SIZES.mobileM})`,
  mobileL: `(min-width: ${SIZES.mobileL})`,
  tablet: `(min-width: ${SIZES.tablet})`,
  desktop: `(min-width: ${SIZES.desktop})`,
};

export const IMAGES = {
  backgroundEffect1,
  backgroundEffect2,
  logoColors,
  logoWhite,
  logoBlack,
  logoBackgroundColors,
  logoBackgroundBlack,
  frontEnd,
  backEnd,
}
