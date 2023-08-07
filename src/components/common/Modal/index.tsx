import { Modal as BaseModal, Button } from "flowbite-react";
import { ModalProps } from "../../types";

const Modal = ({
  show,
  onClose,
  children,
  confirmation,
  title,
  submitDelete,
  isLoading,
}: ModalProps) => {
  return (
    <BaseModal
      show={show}
      size="md"
      popup={confirmation ? true : false}
      onClose={() => onClose(false)}
    >
      <BaseModal.Header> {!confirmation && title}</BaseModal.Header>
      <BaseModal.Body>
        {confirmation ? (
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this contact?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                isProcessing={isLoading}
                color="failure"
                onClick={submitDelete}
              >
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => onClose(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        ) : (
          children
        )}
      </BaseModal.Body>
    </BaseModal>
  );
};

export default Modal;
