
export const LOCALSTORAGE_TOKEN_KEY = "portfolio-token";
export const LOCALSTORAGE_SEARCH_KEY = "searches";
export const LOCALSTORAGE_REMENBER_KEY = "portfolio-remembered-email";

//Mínimo 8 caracteres, pelo menos uma letra, um número e um caracter especial (@$!%*#?&)
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  desktop: '1024px',
};

export const device = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
