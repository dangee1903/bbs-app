import { ENUM_COLOR } from '@constants/enum'
import { PERMISSION_TYPE } from '@constants/request'
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { TDataShow } from '@model/Request'
import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native'
import { Menu } from 'react-native-paper'
import CreateButton from './CreateButton'

type TProps = {
  showMenu: boolean
  closeMenu: () => void
  openMenu: () => void
  setShowModal: (active: boolean) => void
  setDateShow: (dataShow: TDataShow) => void
}

const MenuRequest = ({
  showMenu,
  closeMenu,
  openMenu,
  setShowModal,
  setDateShow,
}: TProps) => {
  const { height } = Dimensions.get('window')
  const { width } = Dimensions.get('window')
  const onIconPress = () => {
    openMenu()
  }

  return (
    <View>
      <CreateButton openMenu={onIconPress} />
      <Menu
        style={{ display: width && height ? 'flex' : 'none' }}
        visible={showMenu}
        onDismiss={closeMenu}
        anchor={{ x: width - 15, y: height - 125 }}
      >
        <TouchableOpacity
          onPress={() => {
            setShowModal(true)
            setDateShow({
              reason: true,
              date: true,
              checkboxTime: true,
              permission_type: PERMISSION_TYPE.LATE,
            })
          }}
          style={styles.menuItem}
        >
          <MaterialIcons
            style={styles.menuIcon}
            name="work"
            size={18}
            color={ENUM_COLOR.black}
          />
          <Text style={styles.menuText}>Xin đi muộn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShowModal(true)
            setDateShow({
              reason: true,
              date: true,
              checkboxTime: true,
              permission_type: PERMISSION_TYPE.EARLY,
            })
          }}
          style={styles.menuItem}
        >
          <MaterialIcons
            style={styles.menuIcon}
            name="work-off"
            size={18}
            color={ENUM_COLOR.black}
          />
          <Text style={styles.menuText}>Xin về sớm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShowModal(true)
            setDateShow({
              reason: true,
              date: true,
              checkBoxSession: true,
              permission_type: PERMISSION_TYPE.NORMAL,
            })
          }}
          style={styles.menuItem}
        >
          <FontAwesome5
            style={styles.menuIcon}
            name="calendar-times"
            size={18}
            color={ENUM_COLOR.black}
          />
          <Text style={styles.menuText}>Xin nghỉ phép</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShowModal(true)
            setDateShow({
              reason: true,
              date: true,
              time: true,
              project: true,
              permission_type: PERMISSION_TYPE.OVERTIME,
            })
          }}
          style={styles.menuItem}
        >
          <MaterialIcons
            style={styles.menuIcon}
            name="more-time"
            size={18}
            color={ENUM_COLOR.black}
          />
          <Text style={styles.menuText}>Log Overtime</Text>
        </TouchableOpacity>
      </Menu>
    </View>
  )
}

export default MenuRequest

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  menuContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: ENUM_COLOR.white,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14,
    padding: 10,
  },
  menuIcon: {
    paddingRight: 20,
  },
  menuText: {
    textAlign: 'left',
    width: 100,
  },
})
