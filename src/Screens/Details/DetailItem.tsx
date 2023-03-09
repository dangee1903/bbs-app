import { TDetailPostType } from '@model/Post/DetailPostType'
import commontStyle from '@styles/commont.style'
import React from 'react'
import { ScrollView, StyleSheet, Text, useWindowDimensions } from 'react-native'
import RenderHTML from 'react-native-render-html'
import { TDetailEventType } from '@model/Event/DetailEventType'
import { converDate } from '@helpers/datatime'
import { TPYE } from './DetailsScreen'

type TProps = {
  data: TDetailPostType | TDetailEventType
  type: string
}

const DetailItem = ({ data, type }: TProps) => {
  const { width } = useWindowDimensions()
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
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
          {type === TPYE.post && (
            <Text style={styles.footer}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              >
                {data?.author_name}
              </Text>
              <Text>, {converDate(data?.created_at)}</Text>
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
    ...commontStyle.fontSizeTitle,
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
