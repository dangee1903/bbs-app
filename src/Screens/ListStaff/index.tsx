import CardUser from '@components/CardUser'
import InputText from '@components/Common/Input/InputText'
import { ENUM_COLOR } from '@constants/enum'
import { TUser, TUsers } from '@model/Users/UsersType'
import { useReduxSelector } from '@store/index'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'
import { filter } from 'lodash'
import { convertStringtoSearch } from '@helpers/string'
import ModalUser from './Modal/ModalUser'

const ListStaff = () => {
  const { users } = useReduxSelector(state => state.users)
  const [valueSearch, setValueSearch] = useState<string>('')
  const [userSelected, setUserSelected] = useState<TUser>()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [listUser, setListUser] = useState<TUsers>(users)

  useEffect(() => {
    if (valueSearch) {
      let userFilter = users
      const listKey = convertStringtoSearch(valueSearch.trim()).split(' ')
      listKey.forEach(value => {
        userFilter = filter(
          userFilter,
          o =>
            convertStringtoSearch(o?.name).includes(value) ||
            convertStringtoSearch(o?.group_name).includes(value) ||
            convertStringtoSearch(o?.team_name).includes(value),
        )
      })
      setListUser(userFilter)
    } else {
      setListUser(users)
    }
  }, [valueSearch, users])

  const handleChangeValue = (value: string) => {
    setValueSearch(value)
  }
  const handleShowModal = (value: boolean) => {
    setShowModal(value)
  }
  const handlePress = (user: TUser) => {
    setShowModal(true)
    setUserSelected(user)
  }

  return (
    <>
      <ScrollView
        style={styles.containerListUser}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentListUser}>
          <Text style={styles.contentHeader}>DANH SÁCH NHÂN VIÊN</Text>
          <InputText
            style={{ backgroundColor: ENUM_COLOR.white, marginBottom: 10 }}
            mode="flat"
            value={valueSearch}
            setChangeValue={handleChangeValue}
            placeholder="Nhập tên hoặc mã nhân viên .v.v."
          />
          {listUser?.map((user: TUser) => (
            <CardUser
              handlePress={() => handlePress(user)}
              key={user.id}
              user={user}
            />
          ))}
        </View>
      </ScrollView>
      {userSelected && (
        <ModalUser
          showModal={showModal}
          setShowModal={handleShowModal}
          user={userSelected}
        />
      )}
    </>
  )
}
export default ListStaff

const styles = StyleSheet.create({
  containerListUser: {
    flex: 1,
    backgroundColor: ENUM_COLOR.white,
  },
  contentListUser: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  contentHeader: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    marginBottom: 20,
  },
})
