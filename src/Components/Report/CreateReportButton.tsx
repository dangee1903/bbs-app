import { ENUM_COLOR } from '@constants/enum'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native'

type TProps = {
  // press: (event: GestureResponderEvent) => void,
  onPress: (route: string) => void
}

const CreateReportButton = ({ onPress }: TProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress('ReportCreate')}
      style={styles.buttonContainer}
      activeOpacity={0.6}
    >
      <AntDesign name="plus" size={14} color={ENUM_COLOR.white} />
    </TouchableOpacity>
  )
}

export default CreateReportButton

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    borderRadius: 50,
    backgroundColor: ENUM_COLOR.mainColor,
    bottom: 20,
    right: 20,
  },
})
