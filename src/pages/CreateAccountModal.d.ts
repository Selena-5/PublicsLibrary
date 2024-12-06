import React from 'react';
import "./CreateAccountModal.css";
interface CreateAccountModalProps {
    isOpen: boolean;
    onClose: () => void;
}
declare const CreateAccountModal: React.FC<CreateAccountModalProps>;
export default CreateAccountModal;
