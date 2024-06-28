export const LOCALSTORAGE_TOKEN_KEY = "portfolio-token";
export const LOCALSTORAGE_SEARCH_KEY = "searches";

//Mínimo 8 caracteres, pelo menos uma letra, um número e um caracter especial (@$!%*#?&)
export const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
