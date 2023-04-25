import { ENUM_COLOR } from '@constants/enum'
import { TDataShow } from '@model/Request'
import React, { useState } from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native'
import { Menu } from 'react-native-paper'
import CreateButton from './CreateButton'
import { ListMenu } from './ListMenu'

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
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const { height } = Dimensions.get('window')
  const { width } = Dimensions.get('window')
  const onIconPress = () => {
    openMenu()
  }

  const handleClickMenu = (dataShow: TDataShow) => {
    setShowModal(true)
    setCurrentIndex(null)
    setDateShow(dataShow)
  }

  const handleTouch = (index: number) => {
    setCurrentIndex(index)
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
        {ListMenu.map((menuItem, index) => {
          return (
            <View
              key={`Request-${String(index)}`}
              onTouchStart={() => handleTouch(index)}
              style={
                currentIndex === index ? styles.menuTouch : styles.menuNormal
              }
            >
              <TouchableOpacity
                onPress={() => handleClickMenu(menuItem.dataShow)}
                style={styles.menuItem}
              >
                {menuItem.icon(
                  styles.menuIcon,
                  currentIndex === index ? ENUM_COLOR.white : ENUM_COLOR.black,
                )}
                <Text
                  style={
                    currentIndex === index
                      ? styles.textMenuTouch
                      : styles.textMenuNormal
                  }
                >
                  {menuItem.label}
                </Text>
              </TouchableOpacity>
            </View>
          )
        })}
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
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuIcon: {
    paddingRight: 20,
  },
  textMenuNormal: {
    color: ENUM_COLOR.black,
  },
  textMenuTouch: {
    color: ENUM_COLOR.white,
  },
  menuTouch: {
    backgroundColor: ENUM_COLOR.mainColor,
  },
  menuNormal: {
    backgroundColor: ENUM_COLOR.white,
  },
})
