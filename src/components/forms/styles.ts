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
  min-width: 600px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${ props => props.theme.colors.white };
`

export const ExperienceForm = styled.form`
  position: relative;
`

export const EducationForm = styled.form`
  position: relative;
`

export const SkillForm = styled.form`
  position: relative;
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

export const InputSectionRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`

export const InputSectionColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  div {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`

export const ButtonSection = styled.div`
  display: flex;
`

export const HeaderIconSection = styled.div`
  position: absolute;
  top: -2rem;
  right: -2.5rem;
`

// -- TEXTS --

export const Title = styled.h3`
  width: 100%;
  text-align: left;
  margin: 2rem 0;
`

// -- INPUTS --

export const TextInput = styled("input")<{ error: boolean }>`
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

  ${props => props.error && `
    box-shadow: 0px 1.5px 0px 0px ${props.theme.colors.error};
  `}
`;

export const PasswordInput = styled("input")<{ error: boolean }>`
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

export const TextArea = styled("textarea")<{ error: boolean }>`
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

export const DateInput = styled("input")<{ error: boolean }>`
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

export const Label = styled.label`
  color: ${ props => props.theme.colors.gray };
  font-size: 1rem;
`;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })<{ error: boolean }>`
  all: unset;
  width: 16px;
  height: 16px;
  border: 1px solid #858585;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  margin-right: 0.5rem;
  transition: all 200ms ease-in-out;

  &:checked {
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background: white;
    transform: translate(-50%, -50%);
    border-radius: 2px;
    opacity: 0;
    transition: all 200ms ease-in-out;
  }

  &:checked::before {
    opacity: 1;
  }

  ${props => props.error && `
    border-color: ${props.theme.colors.error};
  `}
`;