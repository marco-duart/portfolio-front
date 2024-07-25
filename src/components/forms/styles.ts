import styled from "styled-components"

// -- FORM --

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20px;
  gap: 0.5rem;
`;

export const ResumeForm = styled.form`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  background-color: ${ props => props.theme.colors.white };
`

// -- DIVS --

export const HandlePassword = styled.div`
  cursor: pointer;
`;

export const PasswordSection = styled.div`
  position: relative;
  height: 65px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    position: absolute;
    width: 25px;
    margin-right: 10px;
    top: 48%;
    margin-top: -25px;
    right: 0px;
  }
`;

// -- INPUTS --

export const TextInput = styled("input")<{ error: boolean }>`
  width: 250px;
  border: none;
  box-shadow: 0px 1.5px 0px 0px #858585;
  padding: .5rem;
  transition: all 200ms ease-in-out;
  opacity: .8;

  &::placeholder {
    color: rgb(145, 145, 145);
    font-size: .75rem;
  }

  &:focus {
    border: none;
    box-shadow: 0px 1.5px 0px 0px ${props => props.theme.colors.primary};
    outline: none;
  }

  &:focus::placeholder {
    visibility: hidden;
  }
`;

export const SelectInput = styled("select")<{ error: boolean }>`
  width: 250px;
  border: none;
  box-shadow: 0px 1.5px 0px 0px #858585;
  padding: .5rem;
  transition: all 200ms ease-in-out;
  opacity: .8;

  &:focus {
    border: none;
    box-shadow: 0px 1.5px 0px 0px ${props => props.theme.colors.primary};
    outline: none;
  }
`;

export const PasswordInput = styled("input")<{ error: boolean }>`
  width: 250px;
  border: none;
  box-shadow: 0px 1.5px 0px 0px #858585;
  padding: .5rem;
  transition: all 200ms ease-in-out;
  opacity: .8;

  &::placeholder {
    color: rgb(145, 145, 145);
    font-size: .75rem;
  }

  &:focus {
    border: none;
    box-shadow: 0px 1.5px 0px 0px ${props => props.theme.colors.primary};
    outline: none;
  }

  &:focus::placeholder {
    visibility: hidden;
  }
`;

export const TextArea = styled("textarea")<{ error: boolean }>`
  width: 250px;
  border: none;
  box-shadow: 0px 1.5px 0px 0px #858585;
  padding: .5rem;
  transition: all 200ms ease-in-out;
  opacity: .8;

  &::placeholder {
    color: rgb(145, 145, 145);
    font-size: .75rem;
  }

  &:focus {
    border: none;
    box-shadow: 0px 1.5px 0px 0px ${props => props.theme.colors.primary};
    outline: none;
  }

  &:focus::placeholder {
    visibility: hidden;
  }
`;

export const DateInput = styled("input")<{ error: boolean }>`
  width: 250px;
  border: none;
  box-shadow: 0px 1.5px 0px 0px #858585;
  padding: .5rem;
  transition: all 200ms ease-in-out;
  opacity: .8;

  &::placeholder {
    color: rgb(145, 145, 145);
    font-size: .75rem;
  }

  &:focus {
    border: none;
    box-shadow: 0px 1.5px 0px 0px ${props => props.theme.colors.primary};
    outline: none;
  }

  &:focus::placeholder {
    visibility: hidden;
  }
`;
