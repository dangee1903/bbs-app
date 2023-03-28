import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import DetailItem from '@components/DetailItem'
import { ENUM_COLOR } from '@constants/enum'

type TProps = {
  route: any
  navigation: any
}

const DetailReport = ({ route, navigation }: TProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Báo cáo tuần 09-2023 (27/02 - 04/03)</Text>
        <Text>Nguyễn Tiến Phúc</Text>
      </View>
      <View style={styles.sendTo}>
        <View>
        <Text>Gửi cho:</Text>
        <Text>Nguyễn Tiến Phúc</Text>
        </View>
      </View>
      <View style={styles.main}>
        <Text>Gửi cho</Text>
        <Text>Nguyễn Tiến Phúc</Text>
      </View>
      <View style={styles.comment}>
        <Text>Gửi cho</Text>
        <Text>Nguyễn Tiến Phúc</Text>
      </View>
    </View>
  )
}

export default DetailReport

const styles = StyleSheet.create({
  container: {},
  header: {},
  sendTo: {},
  main: {},
  comment: {}
})
