import LoginForm from "../../components/forms/login-form"
import * as S from "./styles"

export const Login = () => {
  return (
    <S.Container>
    <S.Section side="left">
      <S.SectionText>
        Olá Marco Aurélio!
      </S.SectionText>
      <S.SectionText>
        Entre com suas credenciais para ter acesso ao painel de controle.
      </S.SectionText>
    </S.Section>
    <S.Section side="right">
      <LoginForm />
    </S.Section>
    </S.Container>
  )
}
