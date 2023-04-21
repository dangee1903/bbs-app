import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  ActivityIndicator,
} from 'react-native'
import { Box } from 'native-base'
import { useLoginMutation } from '@services/modules/login'
import { RUser } from '@services/modules/login/login'
import { useUsersMutation } from '@services/modules/users'
import { Formik } from 'formik'
import InputPasswordCommon from '@components/Common/Input/InputPasswordCommon'
import { Button, Checkbox } from 'react-native-paper'
import KeyboardAvoidingComponent from '@components/KeyboardAvoidingView'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ENUM_COLOR } from '@constants/enum'
import messaging from '@react-native-firebase/messaging'
import { saveTokenToDatabase } from '@helpers/token'
import { loginValidationSchema } from './loginState'

const Login = () => {
  const [login, { isLoading }] = useLoginMutation()
  const [users] = useUsersMutation()
  const [tokenDevide, setTokenDevice] = useState<string>('')

  const getToken = async () => {
    await messaging().registerDeviceForRemoteMessages()
    const token = await messaging().getToken()
    setTokenDevice(token)
  }

  useEffect(() => {
    getToken()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingComponent>
        <SafeAreaView style={styles.branchView}>
          <Image
            // eslint-disable-next-line global-require, import/extensions
            source={require('../../../assets/BBS-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Bulletin Board System</Text>
          <View style={{ padding: 50 }}>
            <Box alignItems="center">
              <Box w="100%" width="300px">
                <Formik
                  validationSchema={loginValidationSchema}
                  initialValues={{
                    email: '',
                    password: '',
                    remember_me: false,
                  }}
                  onSubmit={async (values: RUser) => {
                    try {
                      const res = await login({
                        ...values,
                        fcm_token: tokenDevide || undefined,
                      }).unwrap()
                      await saveTokenToDatabase(tokenDevide, res.data.id)
                      await users({})
                      // eslint-disable-next-line no-empty
                    } catch (error) {}
                  }}
                  validateOnBlur={false}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                    setFieldValue,
                  }) => (
                    <>
                      <InputPasswordCommon
                        handleChange={handleChange('email')}
                        handleBlur={handleBlur('email')}
                        value={values.email}
                        errors={errors.email}
                        keyboardType="email-address"
                        label="Email"
                      />
                      <View style={{ paddingTop: 10 }}>
                        <InputPasswordCommon
                          handleChange={handleChange('password')}
                          handleBlur={handleBlur('password')}
                          value={values.password}
                          errors={errors.password}
                          label="Password"
                          secureTextEntry
                        />
                      </View>
                      <View style={styles.checkbox}>
                        <Checkbox.Android
                          status={values.remember_me ? 'checked' : 'unchecked'}
                          onPress={() => {
                            setFieldValue('remember_me', !values.remember_me)
                          }}
                          color={ENUM_COLOR.mainColor}
                        />
                        <Text>Remember me</Text>
                      </View>
                      <Button
                        onPress={() => handleSubmit()}
                        disabled={!isValid || isLoading}
                        style={styles.button}
                        mode="contained"
                        uppercase
                        theme={{ roundness: 2 }}
                      >
                        LOGIN
                      </Button>
                    </>
                  )}
                </Formik>
              </Box>
            </Box>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingComponent>
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={ENUM_COLOR.mainColor} />
        </View>
      )}
    </View>
  )
}
export default Login

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 119,
  },
  title: {
    fontSize: 24,
    paddingTop: 60,
  },
  checkbox: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  branchView: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    paddingTop: 60,
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#6200EE',
  },
  loading: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2 - 30,
    left: Dimensions.get('window').width / 2 - 30,
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
})
