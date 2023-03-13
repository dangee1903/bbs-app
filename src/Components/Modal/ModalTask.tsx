import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

type TProps = {
  isShowModal: boolean
  setShowModal: (active: boolean) => void
}

const ModalTask = ({ setShowModal, isShowModal }: TProps) => {
  const containerStyle = { backgroundColor: 'white', padding: 20 }

  return (
    <Provider>
      <Portal>
        <Modal
          visible={isShowModal}
          onDismiss={() => setShowModal(false)}
          contentContainerStyle={containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={() => setShowModal(true)}>
        Show
      </Button>
    </Provider>
  );
};

export default ModalTask;