import React, { useEffect, useState } from 'react'
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native'
import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
} from 'native-base'
import { useLoginMutation } from '@services/modules/login'
import { RUser } from '@services/modules/login/login'
import { useReduxDispatch } from '@store/index'
import { clear } from '@store/loginReducer'

const Login = () => {
  const [user, setUser] = useState<RUser>({
    email: '',
    password: '',
  })
  const dispatch = useReduxDispatch()
  const [login, { data, isSuccess, isLoading, error }] = useLoginMutation()

  const onChangeText = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string,
  ) => {
    setUser(pre => ({ ...pre, [name]: e.nativeEvent.text }))
  }

  const submit = () => {
    login(user)
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: 'white' }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.branchView}>
        <Text style={styles.branchViewText}>Jvb</Text>
      </View>
      <View style={styles.bottomView}>
        <View style={{ padding: 50 }}>
          <Box alignItems="center">
            <Box w="100%" maxWidth="300px">
              <FormControl isRequired>
                <Stack mx="4">
                  <FormControl.Label>User Name</FormControl.Label>
                  <Input
                    onChange={e => onChangeText(e, 'email')}
                    type="text"
                    placeholder="password"
                  />
                  <FormControl.HelperText>
                    Must be atleast 6 characters.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    Atleast 6 characters are required.
                  </FormControl.ErrorMessage>
                </Stack>
                <Stack mx="4">
                  <FormControl.Label>Password</FormControl.Label>
                  <Input
                    onChange={e => onChangeText(e, 'password')}
                    type="password"
                    defaultValue="12345"
                    placeholder="password"
                  />
                  <FormControl.HelperText>
                    Must be atleast 6 characters.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    Atleast 6 characters are required.
                  </FormControl.ErrorMessage>
                </Stack>
                <Stack mx="4">
                  <Button style={styles.button} size="sm" onPress={submit}>
                    Submit
                  </Button>
                </Stack>
              </FormControl>
            </Box>
          </Box>
        </View>
      </View>
    </ScrollView>
  )
}
export default Login

const styles = StyleSheet.create({
  branchView: {
    height: Dimensions.get('window').height / 2.5,
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  branchViewText: {
    color: 'white',
    fontSize: 20,
  },
  bottomView: {
    backgroundColor: 'white',
    flex: 1,
    bottom: 50,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  button: {
    marginTop: 10,
    width: Dimensions.get('window').width / 3,
  },
})
