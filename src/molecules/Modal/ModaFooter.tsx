import { Button, TypeButton } from "../../atoms";

const ModalFooter: React.FC<{
  footer?: React.ReactNode;
  onClose?: () => void;
}> = ({ footer, onClose }) => (
  <div className="modal-footer">
    {footer || (
      <Button typeButton={TypeButton.primary} onClick={onClose}>
        Cerrar
      </Button>
    )}
  </div>
);

export default ModalFooter;
