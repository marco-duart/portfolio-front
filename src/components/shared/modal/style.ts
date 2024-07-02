import styled from "styled-components";

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: ;
  height: ;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
`;


export const ModalHeader = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(2, 0, 36);
`;

export const ModalTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.openSans};
  /* font-size: */
  color: ${(props) => props.theme.colors.white};
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.openSans};
  /* font-size:  */
  padding: 30px 30px 0 30px;
  overflow-y: auto;
`;

export const ModalActionsStyle = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 15px;
  padding: 0 30px;
`;
