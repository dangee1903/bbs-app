import { TListColumn } from '@model/Table/TableType'
import React from 'react'
import { DataTable } from 'react-native-paper'
import { Text } from 'react-native'
import { ENUM_COLOR } from '@constants/enum'

type TProps = {
  listColumn: TListColumn
  urlDownload?: string
}

const Row = ({ listColumn = [], urlDownload = '' }: TProps) => {
  return (
    <DataTable.Row
      style={{
        borderTopWidth: 1,
        borderColor: ENUM_COLOR.grayBorder,
      }}
    >
      {listColumn?.map((item, index) => {
        return (
          <DataTable.Cell key={item.content + String(index)} style={item.style}>
            {item.content}
          </DataTable.Cell>
        )
      })}
    </DataTable.Row>
  )
}

export default Row
