import { ENUM_COLOR } from '@constants/enum'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from 'react-native'

type TProps = {
  openMenu: (event: GestureResponderEvent) => void
}

const CreateButton = ({ openMenu }: TProps) => {
  return (
    <TouchableOpacity onPress={openMenu} style={styles.buttonContainer}>
      <AntDesign name="plus" size={14} color={ENUM_COLOR.white} />
      <Text style={styles.buttonText}>TẠO MỚI</Text>
    </TouchableOpacity>
  )
}

export default CreateButton

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 50,
    backgroundColor: ENUM_COLOR.mainColor,
    bottom: 20,
    right: 20,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 14,
    color: ENUM_COLOR.white,
    marginLeft: 10,
  },
  buttonView: {
    color: ENUM_COLOR.white,
  },
})
