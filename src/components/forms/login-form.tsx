//NATIVE
import { useEffect, useState } from "react";
//LIBRARIES
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
//COMPONENTS
import BaseButton from "../shared/buttons/base-button";

//STYLES
import * as S from "./styles";
import { EyeFill, EyeSlashFill } from "@styled-icons/bootstrap";
//UTILS
import { FORM_MESSAGE } from "../../utils/enums/form-message";
import * as CONSTANTS from "../../utils/constants/constants"
import { useUserContext } from "../../hooks/user/use-user-context";


const loginFormSchema = z.object({
  email: z
    .string()
    .email(FORM_MESSAGE.EMAIL_FORMAT)
    .toLowerCase(),
  password: z.string().min(8, FORM_MESSAGE.PASSWORD_SIZE),
  remember: z.boolean().default(false),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

const LoginForm = () => {
  const { login } = useUserContext();
  const [passwordIsOpen, setPasswordIsOpen] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleLogin = async (data: LoginFormData) => {
    const { remember, ...rest } = data;

    remember ? handleLocalStorage(data.email) : handleLocalStorage();

    const result = await login(rest);

    if (result) {
      navigate("/user");
    } else {
      console.log("Deu ruim!");
    }
  };

  const handleLocalStorage = (email?: string) => {
    if (email) {
      localStorage.setItem(CONSTANTS.LOCALSTORAGE_REMENBER_KEY, email);
    } else {
      localStorage.removeItem(CONSTANTS.LOCALSTORAGE_REMENBER_KEY);
    }
  };

  const handlePassword = () => {
    setPasswordIsOpen(!passwordIsOpen);
  };

  useEffect(() => {
    const rememberedEmail = localStorage.getItem(CONSTANTS.LOCALSTORAGE_REMENBER_KEY);

    if (rememberedEmail) {
      setValue("remember", true);
      setValue("email", rememberedEmail);
    }
  }, []);

  return (
    <S.LoginForm onSubmit={handleSubmit(handleLogin)}>
      <div>
        <label htmlFor="email" hidden>
          E-mail
        </label>
        <S.TextInput
          {...register("email")}
          type="text"
          placeholder="Email"
          error={errors.email ? true : false}
        />
        {errors.email && (
          <small>{errors.email.message}</small>
        )}
      </div>
      <S.PasswordSection>
        <label htmlFor="password" hidden>
          Senha
        </label>
        <S.TextInput
          {...register("password")}
          type={passwordIsOpen ? "text" : "password"}
          placeholder="Senha"
          error={errors.password ? true : false}
        />
        <S.HandlePassword onClick={() => handlePassword()}>
          {passwordIsOpen ? <EyeFill /> : <EyeSlashFill />}
        </S.HandlePassword>
        {errors.password && (
          <small>{errors.password.message}</small>
        )}
      </S.PasswordSection>
      <div>
        <label htmlFor="remember">Lembrar</label>
        <input {...register("remember")} type="checkbox" />
      </div>
      <BaseButton type="submit">ENTRAR</BaseButton>
    </S.LoginForm>
  );
};

export default LoginForm;
