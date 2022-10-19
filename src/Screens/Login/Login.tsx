/* eslint-disable react/react-in-jsx-scope */
import { Alert, Button, View, Text } from 'react-native'

const Login = () => {
  return (
    <View>
      <Text>123</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  )
}
export default Login
