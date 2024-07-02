import LoginForm from "../../components/forms/login-form"
import * as S from "./styles"

const Login = () => {
  return (
    <S.Container>
    <S.Section side="left">
      <div>
        Hello Marco Aurélio!
      </div>
    </S.Section>
    <S.Section side="right">
      <LoginForm />
    </S.Section>
    </S.Container>
  )
}

export default Login