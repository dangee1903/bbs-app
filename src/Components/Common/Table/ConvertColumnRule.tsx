import { ENUM_COLOR } from '@constants/enum'
import { Entypo } from '@expo/vector-icons'
import { TListColumn } from '@model/Table/TableType'
import { Alert, Linking, Text } from 'react-native'
import { convertUrl } from '@helpers/url'

const handleClick = async (url: string) => {
  const supported = await Linking.canOpenURL(url)

  if (supported) {
    await Linking.openURL(url)
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`)
  }
}

export const ConvertColumnRule = (
  content: string | React.ReactNode,
  filePath?: string,
) => {
  const listColumn: TListColumn = [
    {
      content: (
        // eslint-disable-next-line react/react-in-jsx-scope
        <Text style={{ fontSize: 13, fontWeight: '400' }}>{content}</Text>
      ),
      style: {
        borderRightWidth: 1,
        borderColor: ENUM_COLOR.grayBorder,
        flex: 4,
      },
    },
    {
      content: (
        // eslint-disable-next-line react/react-in-jsx-scope
        <Entypo
          onPress={
            filePath ? () => handleClick(convertUrl(filePath)) : undefined
          }
          name="chevron-small-down"
          size={24}
          color="black"
        />
      ),
      style: {
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        paddingLeft: 15,
      },
    },
  ]

  return listColumn
}
