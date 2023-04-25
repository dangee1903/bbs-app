import { ENUM_COLOR } from '@constants/enum'
import { Entypo } from '@expo/vector-icons'
import { TListColumn } from '@model/Table/TableType'
import { Text } from 'react-native'
import * as FileSystem from 'expo-file-system'
import { convertUrl } from '@helpers/url'
import * as MediaLibrary from 'expo-media-library'

const handleClick = (url: string) => {
  const path = url.split('/')
  const fileName = path[path.length - 1]
  FileSystem.downloadAsync(url, `${FileSystem.documentDirectory + fileName}`)
    .then(({ uri }) => {
      MediaLibrary.createAssetAsync(uri).then(asset => {
        console.log('asset', asset)
        MediaLibrary.createAlbumAsync('myfolder', asset)
          .then(() => {
            console.log('success')
          })
          .catch(error => {
            console.log('error')
          })
      })
    })
    .catch(error => {
      console.error(error)
    })
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
