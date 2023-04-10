import React from 'react'
import { Avatar, Modal } from 'react-native-paper'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Linking,
} from 'react-native'
import { ENUM_COLOR } from '@constants/enum'
import { TUser } from '@model/Users/UsersType'
import IconPhone from '@components/Icon/IconPhone'
import { convertUrl } from '@helpers/url'

type TProps = {
  showModal?: boolean
  setShowModal?: (active: boolean) => void
  user: TUser
}

const ModalUser = ({
  showModal = false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setShowModal = () => {},
  user,
}: TProps) => {
  const handlePhoneCall = () => {
    if (user.phone) {
      if (Platform.OS === 'android') {
        Linking.openURL(`tel: ${user.phone}`)
      } else {
        Linking.openURL(`telprompt: ${user.phone}`)
      }
    }
  }
  return (
    <Modal
      visible={showModal}
      onDismiss={() => setShowModal(false)}
      contentContainerStyle={styles.containerStyle}
    >
      <View style={styles.contentModal}>
        <Avatar.Image
          size={128}
          style={{ backgroundColor: ENUM_COLOR.white }}
          source={{ uri: convertUrl(user.avatar) }}
        />
        <Text style={styles.jobName}>{user.job_name}</Text>
        <Text style={styles.name}>{user.name}</Text>
        <View style={styles.infoTeam}>
          <Text style={styles.infoText}>{user.group_name}</Text>
          {user.team_name && (
            <>
              <Text style={{ marginHorizontal: 8 }}>-</Text>
              <Text style={styles.infoText}>{user.team_name}</Text>
            </>
          )}
        </View>
        <TouchableOpacity onPress={handlePhoneCall}>
          <IconPhone />
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default ModalUser

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: ENUM_COLOR.white,
    marginLeft: 20,
    marginRight: 20,
    paddingVertical: 60,
    borderRadius: 4,
  },
  contentModal: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  jobName: {
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: ENUM_COLOR.black,
    borderRadius: 10,
  },
  infoTeam: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontWeight: '700',
    fontSize: 22,
  },
  infoText: {
    fontSize: 22,
  },
})
