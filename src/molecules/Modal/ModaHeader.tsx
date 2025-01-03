import { Text, TypeText } from "./../../Atoms";

const ModalHeader: React.FC<{ head?: string | React.ReactNode }> = ({
  head,
}) => {
  if (!head) return null;
  return (
    <div className="modal-head">
      {typeof head === "string" ? (
        <Text typeText={TypeText.subtitle} className="modal-title">
          {head}
        </Text>
      ) : (
        head
      )}
    </div>
  );
};

export default ModalHeader;
