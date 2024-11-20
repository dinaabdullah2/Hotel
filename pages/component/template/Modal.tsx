import { Modal } from "@mantine/core";
import { ReactNode } from "react";

type ModalComp_TP = {
  children?: ReactNode;
  opened: boolean;
  isClose: () => void;
  title?:any
  fullScreen?:boolean;
  withCloseButton?:boolean;
};

function ModalComp({ children, opened, isClose , title , fullScreen , withCloseButton}: ModalComp_TP) {
  //   const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal withCloseButton={withCloseButton} opened={opened} onClose={isClose}  title={title} fullScreen={fullScreen}>
  
        {children}
      </Modal>
    </>
  );
}

export default ModalComp;
