/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react'
import { Button, Modal, Portal } from 'react-native-paper'
import { StyleSheet, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

type TProps = {
  isShowModal?: boolean
  setShowModal?: (active: boolean) => void
  children: React.ReactNode
  title?: string
  handleConfirm: () => void
  disable?: boolean
  handleReset?: (e?: React.SyntheticEvent<any, Event> | undefined) => void
}

const ModalTask = ({
  setShowModal = () => {},
  isShowModal = false,
  title = '',
  children,
  handleConfirm,
  disable = false,
  handleReset = () => {},
}: TProps) => {
  React.useEffect(() => {
    handleReset()
  }, [handleReset, isShowModal])

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
          <Button
            onPress={() => {
              setShowModal(false)
              handleReset()
            }}
            style={styles.buttonFooter}
          >
            <Text style={styles.textCancleFooter}>HỦY</Text>
          </Button>
          <Button
            disabled={disable}
            onPress={handleConfirm}
            style={styles.buttonFooter}
          >
            <Text style={styles.textConfirmFooter}>XÁC NHẬN</Text>
          </Button>
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
