import { ENUM_COLOR } from '@constants/enum'
import { TListHeader } from '@model/Table/TableType'
import React from 'react'
import { DataTable } from 'react-native-paper'
import { Text } from 'react-native'

type TProps = {
  listHeader: TListHeader
}

const HeaderTable = ({ listHeader = [] }: TProps) => {
  return (
    <DataTable.Header
      style={{
        borderBottomWidth: 1,
        borderColor: ENUM_COLOR.grayBorder,
      }}
    >
      {listHeader?.map((item, index) => {
        return (
          <DataTable.Title
            key={item.content + String(index)}
            style={item.style}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: '400',
                color: ENUM_COLOR.black,
              }}
            >
              {item.content}
            </Text>
          </DataTable.Title>
        )
      })}
    </DataTable.Header>
  )
}

export default HeaderTable
