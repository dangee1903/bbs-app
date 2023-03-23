import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Box, Button } from 'native-base'
import { useLoginMutation } from '@services/modules/login'
import { RUser } from '@services/modules/login/login'
import { useUsersMutation } from '@services/modules/users'
import { Formik } from 'formik'
import InputPasswordCommon from '@components/Common/Input/InputPasswordCommon'
import { Checkbox } from 'react-native-paper'
import KeyboardAvoidingComponent from '@components/KeyboardAvoidingView'
import { loginValidationSchema } from './loginState'

const Login = () => {
  const [login] = useLoginMutation()
  const [users] = useUsersMutation()

  return (
    <KeyboardAvoidingComponent>
      <View style={styles.branchView}>
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
                    await login(values).unwrap()
                    await users()
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
                      <Checkbox
                        status={values.remember_me ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setFieldValue('remember_me', !values.remember_me)
                        }}
                      />
                      <Text>Remember me</Text>
                    </View>
                    <Button
                      onPress={() => handleSubmit()}
                      disabled={!isValid}
                      style={styles.button}
                    >
                      LOGIN
                    </Button>
                  </>
                )}
              </Formik>
            </Box>
          </Box>
        </View>
      </View>
    </KeyboardAvoidingComponent>
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#6200EE',
  },
})
