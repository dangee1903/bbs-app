import { ENUM_COLOR } from '@constants/enum'
import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { DataTable } from 'react-native-paper'
import { useGetRuleQuery } from '@services/modules/rule'
import HeaderTable from '@components/Common/Table/Header'
import { listTitleHeaderRule } from '@constants/table'
import RuleSkeleton from '@components/Skeleton/EventSkeleton'
import Row from '@components/Common/Table/Row'
import { ConvertColumnRule } from '@components/Common/Table/ConvertColumnRule'

const ListRule = () => {
  const { data: dataListRule, isLoading: loadingRule } = useGetRuleQuery()

  return (
    <ScrollView
      style={styles.containerListUser}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.contentListUser}>
        <Text style={styles.contentHeader}>NỘI QUY/ QUY ĐỊNH</Text>
        <DataTable
          style={{
            borderWidth: 1,
            borderColor: ENUM_COLOR.grayBorder,
          }}
        >
          <HeaderTable listHeader={listTitleHeaderRule} />
          {loadingRule ? (
            <RuleSkeleton />
          ) : (
            dataListRule?.data?.regulations?.map(rule => {
              return (
                <Row
                  key={rule.id}
                  listColumn={ConvertColumnRule(rule.name, rule.file_path)}
                />
              )
            })
          )}
        </DataTable>
      </View>
    </ScrollView>
  )
}
export default ListRule

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
