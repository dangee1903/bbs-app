/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetDetailPostMutation } from '@services/modules/post'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DetailItem from './DetailItem'

type TProps = {
  route: any
  navigation: any
}

const DetailPostScreen = ({ route, navigation }: TProps) => {
  const [getDetailPost, { data: dataPost, isSuccess, isLoading, error }] =
    useGetDetailPostMutation()

  useEffect(() => {
    if (route.params.type === 'Post' && route.params.id) {
      getDetailPost(route.params.id)
    }
  }, [getDetailPost, route.params.id, route.params.type])
  return (
    <View>
      <DetailItem data={dataPost?.data} />
    </View>
  )
}

export default DetailPostScreen

const styles = StyleSheet.create({})
