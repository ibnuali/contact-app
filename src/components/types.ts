export type ModalProps = {
    show: boolean;
    onClose: (value: boolean) => void;
    children?: React.ReactNode;
    confirmation?: boolean;
    submitDelete?: () => void;
    title?: string;
    isLoading?: boolean;
  };

  export type HeaderProps = {
    setShowModal: (value: boolean) => void;
    dispatchDataForm: (value: any) => void;
  };