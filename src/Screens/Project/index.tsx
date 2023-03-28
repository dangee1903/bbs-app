import DropdownCommon from '@components/Common/DropdownCommon'
import { ENUM_COLOR } from '@constants/enum'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import ListReportCard from '@components/Report/ListReportCardComponent'
import CreateReportButton from '@components/Report/CreateReportButton'

type TProps = {
  navigation: any
}

const Project = ({ navigation }: TProps) => {
  const listGroup = [
    {
      label: 'Xem theo cá nhân',
      value: 1,
    },
    {
      label: 'xem theo nhom',
      value: 2,
    },
    {
      label: 'xem theo cong ty',
      value: 3,
    },
  ]

  const listTeam = [
    {
      label: 'HiStack',
      value: 1,
    },
    {
      label: 'PHP',
      value: 2,
    },
    {
      label: 'FullStack',
      value: 3,
    },
  ]

  const listMonth = [
    {
      label: 'Tháng 1',
      value: 1,
    },
    {
      label: 'Tháng 2',
      value: 2,
    },
    {
      label: 'Tháng 3',
      value: 3,
    },
  ]

  const listYear = [
    {
      label: 'Năm 2023',
      value: 2023,
    },
    {
      label: 'Năm 2022',
      value: 2022,
    },
  ]

  const Divider = () => {
    return (
      <View
        style={{
          height: 20,
        }}
      />
    )
  }

  const onPress = (
    routeName: string
  ) => {
    navigation.navigate(routeName)
  }

  return (
    <>
      {/* showsVerticalScrollIndicator={false} */}
      <View style={styles.container}>
        <Divider />
        <View style={styles.item}>
          <DropdownCommon
            items={listGroup}
            name="group"
            label="Group"
            value={1}
            setFieldValue={() => {}}
          />
        </View>
        <View style={styles.item}>
          <DropdownCommon
            items={listTeam}
            name="team"
            label="Xem theo team"
            value={1}
            setFieldValue={() => {}}
          />
        </View>
        <View style={styles.flexContainer}>
          <View style={styles.flexItem}>
            <DropdownCommon
              items={listMonth}
              name="month"
              label="Xem theo tháng"
              value={3}
              setFieldValue={() => {}}
            />
          </View>
          <View style={styles.flexItem}>
            <DropdownCommon
              items={listYear}
              name="year"
              label="Xem theo năm"
              value={2023}
              setFieldValue={() => {}}
            />
          </View>
        </View>
        <View style={styles.itemCenter}>
          <MaterialCommunityIcons
            name="clock-plus-outline"
            style={styles.iconCenter}
            size={18}
            color={ENUM_COLOR.black}
          />
          <Text style={styles.textCenter}>Xem thống kê</Text>
        </View>
        <ListReportCard onPress={onPress}/>
        <CreateReportButton onPress={onPress}/>
      </View>
    </>
  )
}
export default Project

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
    backgroundColor: ENUM_COLOR.white,
    paddingHorizontal: 15,
    paddingTop: 0,
  },
  item: {
    paddingHorizontal: 2,
  },
  itemCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCenter: {
    marginRight: 2,
    fontWeight: 'bold',
  },
  textCenter: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  flexItem: {
    width: '50%',
    paddingHorizontal: 2,
  },
})
