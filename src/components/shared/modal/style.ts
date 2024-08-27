import styled from "styled-components";

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
`;

export const ModalContainer = styled.div`
  width: 85%;
  height: 70%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #dadada8d;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;


export const ModalHeader = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.tertiary};
  border-radius: 10px 10px 0 0;
`;

export const ModalTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.openSans};
  color: ${(props) => props.theme.colors.white};
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.openSans};
  padding: 30px 30px 0 30px;
  overflow-y: auto;
`;
