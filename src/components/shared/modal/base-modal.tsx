//NATIVE
//LIBRARIES
//COMPONENTS
//STYLES
import CrudButton from "../buttons/crud-button";
import * as S from "./style";
//UTILS
interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BaseModal: React.FC<Props> = ({ isOpen, onClose, children}) => {
  return (
    <S.ModalOverlay isOpen={isOpen} onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalTitle></S.ModalTitle>
          <CrudButton onClick={onClose} action="close">X</CrudButton>
        </S.ModalHeader>
        <S.ModalBody>
          {children}
        </S.ModalBody>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default BaseModal;