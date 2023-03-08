import { DataType } from '@model/Post/DetailPostType'
import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'
import RenderHTML from 'react-native-render-html'

type TProps = {
  data: DataType
}

const DetailItem = ({ data }: TProps) => {
  const { width } = useWindowDimensions()

  return (
    <ScrollView>
      {data && (
        <>
          <Text>{data?.post?.name}</Text>
          <RenderHTML
            contentWidth={width}
            source={{
              html: data?.post?.content,
            }}
          />
        </>
      )}
    </ScrollView>
  )
}

export default DetailItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
})
