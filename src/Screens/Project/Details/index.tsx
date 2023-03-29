import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'
import { ENUM_COLOR } from '@constants/enum'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import commonStyle from '@styles/commonStyle'
import React from 'react'

type TProps = {
  route: any
  navigation: any
}

const DetailReport = ({ route, navigation }: TProps) => {
  const [value, onChangeText] = React.useState(
    '1. Công việc tuần này: Fix bug camping car \n2. Dự kiến tuần sau: Fix bug camping car \n3. Vấn đề gặp phải: \n4. Cảm nghĩ:',
  )

  const [comment, onChangeComment] = React.useState('')

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text>Báo cáo tuần 09-2023 (27/02 - 04/03)</Text>
        <Text>Nguyễn Tiến Phúc</Text>
      </View>
      <View style={styles.sendTo}>
        <View style={styles.sendToHeader}>
          <Text style={styleCommon.title}>Gửi cho:</Text>
          <MaterialCommunityIcons
            name="eye"
            style={styles.eyeIcon}
            size={18}
            color={ENUM_COLOR.black}
          />
        </View>
        <View style={styles.sendToBody}>
          <View style={styles.card}>
            <Image
              style={styleCommon.image}
              source={{
                uri: 'https://reactnative.dev/img/logo-og.png',
              }}
            />
            <Text>Nguyen Van Trinh</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styleCommon.image}
              source={{
                uri: 'https://reactnative.dev/img/logo-og.png',
              }}
            />
            <Text>Nguyen Van Trinh</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styleCommon.image}
              source={{
                uri: 'https://reactnative.dev/img/logo-og.png',
              }}
            />
            <Text>Nguyen Van Trinh</Text>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <Text style={styleCommon.title}>Nội dung:</Text>
        <TextInput
          style={styleCommon.textinput}
          editable
          multiline
          numberOfLines={8}
          onChangeText={onChangeText}
          value={value}
          keyboardType="default"
          secureTextEntry
        />
      </View>
      <View style={styles.commentSection}>
        <Text style={styleCommon.title}>Bình luận</Text>
        <View style={styles.commentCard}>
          <Image
            style={styleCommon.image}
            source={{
              uri: 'https://reactnative.dev/img/logo-og.png',
            }}
          />
          <View style={{ flex: 1 }}>
            <Text>Nguyen Van Trinh</Text>
            <Text style={styles.comment}>That la tuyet voi</Text>
          </View>
          <Text>14:20</Text>
        </View>
        <View style={styles.commentCard}>
          <Image
            style={styleCommon.image}
            source={{
              uri: 'https://reactnative.dev/img/logo-og.png',
            }}
          />
          <View style={{ flex: 1 }}>
            <Text>Nguyen Van Trinh</Text>
            <Text style={styles.comment}>That la tuyet voi</Text>
          </View>
          <Text>14:20</Text>
        </View>
      </View>
      <View style={styles.commentInput}>
        <Text style={styleCommon.label}>Bình luận</Text>
        <TextInput
          style={styleCommon.textinput}
          editable
          multiline
          placeholder="Nhập bình luận"
          numberOfLines={8}
          onChangeText={onChangeComment}
          value={comment}
          keyboardType="default"
          secureTextEntry
        />
        <View style={styleCommon.button}>
        <Button
          onPress={() => {}}
          title="Gửi"
          color={ENUM_COLOR.mainColor}
          accessibilityLabel="Learn more about this purple button"
        />
        </View>
      </View>
    </ScrollView>
  )
}

export default DetailReport

const styleCommon = StyleSheet.create({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  image: {
    width: 25,
    height: 25,
    objectFit: 'cover',
    borderRadius: 50,
    marginRight: 4,
  },
  textinput: {
    padding: 20,
    height: 120,
    borderColor: '#eee',
    borderBottomColor: 'green',
    borderWidth: 1,
    borderBottomWidth: 3,
    borderRadius: 10,
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 14,
    width: 80,
    textAlign: 'center',
    backgroundColor: '#fff',
    zIndex: 2
  },
  button: {
    paddingVertical: 20
  }
})

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: ENUM_COLOR.white,
  },
  header: {
    marginVertical: 8,
  },
  sendTo: {
    backgroundColor: '#eee',
  },
  sendToHeader: {
    ...styleCommon.flexRow,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eyeIcon: {
    paddingHorizontal: 8,
  },
  sendToBody: {
    ...styleCommon.flexRow,
    flexWrap: 'wrap',
  },
  card: {
    ...styleCommon.flexRow,
    ...commonStyle.boxShadow,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: ENUM_COLOR.white,
    marginHorizontal: 4,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: '#666',
    borderWidth: 1,
    marginBottom: 8,
  },
  main: {},
  commentSection: {
    paddingBottom: 20,
  },
  commentCard: {
    ...styleCommon.flexRow,
    alignItems: 'center',
    marginHorizontal: 16,
    paddingVertical: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  comment: {},
  commentInput: {
    position: 'relative',
    paddingBottom: 40
  }
})
