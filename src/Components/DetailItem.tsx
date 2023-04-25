import { TDetailPostType } from '@model/Post/DetailPostType'
import React from 'react'
import { ScrollView, StyleSheet, Text, useWindowDimensions } from 'react-native'
import RenderHTML from 'react-native-render-html'
import { TDetailEventType } from '@model/Event/DetailEventType'
import { convertDate } from '@helpers/datatime'
import commonStyle from '@styles/commonStyle'
import { ENUM_COLOR } from '@constants/enum'

type TProps = {
  data: TDetailPostType | TDetailEventType
  type: string
}

const TYPE_POST = {
  post: 'Post',
  event: 'Event',
}

const DetailItem = ({ data, type }: TProps) => {
  const { width } = useWindowDimensions()
  return (
    <ScrollView
      style={{
        backgroundColor: ENUM_COLOR.white,
        paddingHorizontal: 10,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.headerTitle}>{data?.introduction}</Text>
      {data && (
        <>
          <RenderHTML
            contentWidth={width}
            source={{
              html: data?.content,
            }}
          />
          {type === TYPE_POST.post && (
            <Text style={styles.footer}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              >
                {data?.author_name}
              </Text>
              <Text>{`, ${convertDate(data?.created_at)}`}</Text>
            </Text>
          )}
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
  headerTitle: {
    ...commonStyle.fontSizeTitle,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  footer: {
    textAlign: 'right',
    marginBottom: 20,
    marginRight: 16,
    fontSize: 14,
  },
})
