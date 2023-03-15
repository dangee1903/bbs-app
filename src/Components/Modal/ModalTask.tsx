import * as React from 'react'
import { Modal, Portal } from 'react-native-paper'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

type TProps = {
  isShowModal?: boolean
  setShowModal?: (active: boolean) => void
  children: React.ReactNode
  title?: string
  handleConfirm: () => void
}

const ModalTask = ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setShowModal = () => {},
  isShowModal = false,
  title = '',
  children,
  handleConfirm,
}: TProps) => {
  return (
    <Portal>
      <Modal
        visible={isShowModal}
        onDismiss={() => setShowModal(false)}
        contentContainerStyle={styles.containerStyle}
      >
        <View style={styles.headerModal}>
          <Text style={styles.headerText}>{title}</Text>
          <AntDesign
            onPress={() => setShowModal(false)}
            name="close"
            size={14}
            color="#6200EE"
          />
        </View>
        {children}
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => setShowModal(false)}
            style={styles.buttonFooter}
          >
            <Text style={styles.textCancleFooter}>HỦY</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleConfirm} style={styles.buttonFooter}>
            <Text style={styles.textConfirmFooter}>XÁC NHẬN</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Portal>
  )
}

export default ModalTask

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
  buttonFooter: {
    paddingHorizontal: 10,
    color: '#6200EE',
  },
  textCancleFooter: {
    fontSize: 14,
  },
  textConfirmFooter: {
    fontSize: 14,
    color: '#6200EE',
  },
})
