/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetDetailEventMutation } from '@services/modules/event'
import { useGetDetailPostMutation } from '@services/modules/post'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import DetailItem from '@components/DetailItem'

const TYPE_POST = {
  post: 'Post',
  event: 'Event',
}

type TProps = {
  route: any
  navigation: any
}

const Details = ({ route, navigation }: TProps) => {
  const [getDetailPost, { data: dataPost, isLoading: loadingPost }] =
    useGetDetailPostMutation()
  const [getDetailEvent, { data: dataEvent, isLoading: loadingEvent }] =
    useGetDetailEventMutation()

  useEffect(() => {
    if (route.params.type === TYPE_POST.post && route.params.id) {
      getDetailPost(route.params.id)
    }
    if (route.params.type === TYPE_POST.event && route.params.id) {
      getDetailEvent(route.params.id)
    }
  }, [getDetailEvent, getDetailPost, route.params.id, route.params.type])
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      {loadingPost || loadingEvent ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <DetailItem
          data={dataPost?.data?.post || dataEvent?.data.event}
          type={route.params.type}
        />
      )}
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  loading: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
