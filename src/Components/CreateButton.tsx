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
      <AntDesign name="plus" size={14} color="white" />
      <Text style={styles.buttonText}>CREATE</Text>
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
    backgroundColor: '#6200EE',
    bottom: 20,
    right: 20,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  buttonView: {
    color: '#fff',
  },
})
