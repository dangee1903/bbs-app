import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Surface, Text, Title } from 'react-native-paper'

type TProps = {
  menu?: boolean
  headerBg?: string
  onPressMenu?: () => void
  title?: string
  iconColor?: string
}

const AppHeader = ({
  menu,
  onPressMenu,
  title,
  headerBg = 'white',
  iconColor = 'black',
}: TProps) => {
  return (
    <Surface style={[styles.header, { backgroundColor: headerBg }]}>
      <View style={styles.view}>
        {menu && (
          <TouchableOpacity onPress={onPressMenu}>
            {/* <Feather name="menu" size={IconSize} color={iconColor} /> */}
            <Ionicons name="menu" size={40} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.titleView}>
        <Title style={{ color: iconColor }}>{title}</Title>
      </View>
      <View style={[styles.view, styles.rightView]}>
        <Text>abc</Text>
      </View>
    </Surface>
  )
}

export default AppHeader

const styles = StyleSheet.create({
  header: {
    height: 50,
    elevation: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  view: {
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleView: {
    flex: 1,
  },
  rightView: {
    justifyContent: 'flex-end',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
})
