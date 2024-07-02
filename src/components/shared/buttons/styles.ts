import styled from "styled-components";

export const BaseButton = styled.button`
  border: none;
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.candal};
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const FormButton = styled.button`
  border: none;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.candal};
  cursor: pointer;
`;

export const CrudButton = styled("button")<{ action: "close" | "edit" | "delete" | "cancel" | "create" | "save"; }>`

  background-color: ${(props) => {
    switch (props.action) {
      case "close":
        return props.theme.colors.close;
      case "delete":
        return props.theme.colors.delete;
      case "edit":
        return props.theme.colors.edit;
      case "cancel":
        return props.theme.colors.cancel;
      case "create":
        return props.theme.colors.create;
      case "save":
        return props.theme.colors.save;
    }
  }};

  border: none;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.candal};
  cursor: pointer;
`;