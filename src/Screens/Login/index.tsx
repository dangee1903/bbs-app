import React, { useState } from 'react'
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native'
import { Box, Button, FormControl, Input, Stack } from 'native-base'
import { useLoginMutation } from '@services/modules/login'
import { RUser } from '@services/modules/login/login'

const Login = () => {
  const [user, setUser] = useState<RUser>({
    email: '',
    password: '',
  })
  const [login] = useLoginMutation()

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
        <Image
          // eslint-disable-next-line global-require, import/extensions
          source={require('../../../assets/BBS-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Bulletin Board System</Text>
      </View>
      <View style={styles.bottomView}>
        <View style={{ padding: 50 }}>
          <Box alignItems="center">
            <Box w="100%" maxWidth="300px">
              <FormControl isRequired>
                <Stack mx="4">
                  <FormControl.Label>Username</FormControl.Label>
                  <Input
                    onChange={e => onChangeText(e, 'email')}
                    type="text"
                    placeholder="Username"
                  />
                </Stack>
                <Stack mx="4">
                  <FormControl.Label>Password</FormControl.Label>
                  <Input
                    onChange={e => onChangeText(e, 'password')}
                    type="password"
                    defaultValue="12345"
                    placeholder="password"
                  />
                </Stack>
                <Stack mx="4">
                  <Button style={styles.button} size="sm" onPress={submit}>
                    Login
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
  logo: {
    width: 120,
    height: 119,
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    marginTop: 60,
  },
  branchView: {
    height: Dimensions.get('window').height / 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    backgroundColor: 'white',
    flex: 1,
    bottom: 50,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  button: {
    marginTop: 40,
  },
})
