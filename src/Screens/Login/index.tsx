import React from 'react'
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native'
import { Box, Button } from 'native-base'
import { useLoginMutation } from '@services/modules/login'
import { RUser } from '@services/modules/login/login'
import { useUsersMutation } from '@services/modules/users'
import { Formik } from 'formik'
import InputCommon from '@components/Common/InputCommon'
import { loginValidationSchema } from './loginState'

const Login = () => {
  const [login] = useLoginMutation()
  const [users] = useUsersMutation()

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: 'white' }}
      showsVerticalScrollIndicator={false}
    >
      {/* <Toast position="top" /> */}
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
              <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={async (values: RUser) => {
                  try {
                    console.log('123')

                    await login(values).unwrap()
                    await users()
                    // eslint-disable-next-line no-empty
                  } catch (error) {}
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  isValid,
                }) => (
                  <>
                    <InputCommon
                      placeholder="Email Address"
                      handleChange={handleChange('email')}
                      handleBlur={handleBlur('email')}
                      value={values.email}
                      errors={errors.email}
                      keyboardType="email-address"
                      label="Email"
                    />
                    <InputCommon
                      placeholder="Password"
                      handleChange={handleChange('password')}
                      handleBlur={handleBlur('password')}
                      value={values.password}
                      errors={errors.password}
                      label="Password"
                      secureTextEntry
                    />
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
