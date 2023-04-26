import { ENUM_COLOR } from '@constants/enum'
import { TUser } from '@model/Users/UsersType'
import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'
import { convertUrl } from '@helpers/url'

type TProps = {
  user: TUser
  handlePress?: () => void
}

const CardUser = ({ user, handlePress }: TProps) => {
  return (
    <Card onPress={handlePress} style={styles.containCard}>
      <Card.Content style={styles.contentCard}>
        <View>
          <Avatar.Image
            size={65}
            style={{ backgroundColor: ENUM_COLOR.white }}
            source={{ uri: convertUrl(user.avatar) }}
          />
        </View>
        <View style={styles.infoUser}>
          <View>
            <Text style={styles.nameUser}>{user.name}</Text>
          </View>
          <View style={styles.infoTeam}>
            <Text
              style={{
                color: ENUM_COLOR.black,
              }}
            >
              {user.group_name}
            </Text>
            {user.team_name && (
              <>
                <Text style={{ marginHorizontal: 5 }}>-</Text>
                <Text
                  style={{
                    color: ENUM_COLOR.black,
                    marginRight: 5,
                  }}
                >
                  {user.team_name}
                </Text>
              </>
            )}
          </View>
        </View>
      </Card.Content>
    </Card>
  )
}

export default CardUser

const styles = StyleSheet.create({
  containCard: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: ENUM_COLOR.white,
  },
  contentCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameUser: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  infoUser: {
    flexDirection: 'column',
    marginLeft: 50,
  },
  infoTeam: {
    flexDirection: 'row',
  },
})
