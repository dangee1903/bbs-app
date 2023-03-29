import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import DetailItem from '@components/DetailItem'
import { ENUM_COLOR } from '@constants/enum'

type TProps = {
  route: any
  navigation: any
}

const ReportCreate = ({ route, navigation }: TProps) => {
  return (
    <View style={styles.container}>
      <Text>Create</Text>
    </View>
  )
}

export default ReportCreate

const styles = StyleSheet.create({
  container: {},
})
