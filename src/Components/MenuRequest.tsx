import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { TDataShow } from '@model/Request'
import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
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
  const [menuAnchor, setMenuAnchor] = useState({ x: 0, y: 0 })
  const onIconPress = (event: GestureResponderEvent) => {
    const { nativeEvent } = event
    const anchor = {
      x: nativeEvent.pageX,
      y: nativeEvent.pageY,
    }

    setMenuAnchor(anchor)
    openMenu()
  }

  return (
    <View>
      <CreateButton openMenu={onIconPress} />
      <Menu
        style={styles.menuContainer}
        visible={showMenu}
        onDismiss={closeMenu}
        anchor={menuAnchor}
      >
        <TouchableOpacity
          onPress={() => {
            setShowModal(true)
            setDateShow({
              reason: true,
              date: true,
              checkboxTime: true,
              permission_type: '1',
            })
          }}
          style={styles.menuItem}
        >
          <MaterialIcons
            style={styles.menuIcon}
            name="work"
            size={18}
            color="black"
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
              permission_type: '2',
            })
          }}
          style={styles.menuItem}
        >
          <MaterialIcons
            style={styles.menuIcon}
            name="work-off"
            size={18}
            color="black"
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
              permission_type: '0',
            })
          }}
          style={styles.menuItem}
        >
          <FontAwesome5
            style={styles.menuIcon}
            name="calendar-times"
            size={18}
            color="black"
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
              permission_type: '4',
            })
          }}
          style={styles.menuItem}
        >
          <MaterialIcons
            style={styles.menuIcon}
            name="more-time"
            size={18}
            color="black"
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
    backgroundColor: '#FFF',
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
