import React from 'react'
import { Avatar, Modal } from 'react-native-paper'
import { StyleSheet, View, Text, TouchableOpacity, Platform, Linking } from 'react-native'
import { ENUM_COLOR } from '@constants/enum'
import { TUser } from '@model/Users/UsersType'
import Svg, { Path } from 'react-native-svg'

type TProps = {
    showModal?: boolean
    setShowModal?: (active: boolean) => void
    user: TUser
}


const ModalUser = ({ showModal = false, setShowModal = () => { }, user }: TProps) => {
    const handlePhoneCall = () => {
        if (user.phone) {
            if (Platform.OS === 'android') {
                Linking.openURL(`tel: ${user.phone}`)
            } else {
                Linking.openURL(`telprompt: ${user.phone}`)
            }
        }
    }
    return (
        <Modal visible={showModal}
            onDismiss={() => setShowModal(false)}
            contentContainerStyle={styles.containerStyle}>
            <View style={styles.contentModal}>
                <Avatar.Image
                    size={128}
                    style={{ backgroundColor: ENUM_COLOR.white }}
                    source={{uri: process.env.BASE_URL + user.avatar}}
                />
                <Text style={styles.jobName}>{user.job_name}</Text>
                <Text
                    style={styles.name}
                >
                    {user.name}
                </Text>
                <View style={styles.infoTeam}>
                    <Text
                        style={styles.infoText}
                    >
                        {user.group_name}
                    </Text>
                    {user.team_name && (<><Text style={{ marginHorizontal: 8 }}>-</Text><Text
                        style={styles.infoText}
                    >
                        {user.team_name}
                    </Text></>)}
                </View>
                <TouchableOpacity onPress={handlePhoneCall}>
                    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <Path d="M5.02778 10.8194C7.02778 14.75 10.25 17.9583 14.1806 19.9722L17.2361 16.9167C17.6111 16.5417 18.1667 16.4167 18.6528 16.5833C20.2083 17.0972 21.8889 17.375 23.6111 17.375C24.375 17.375 25 18 25 18.7639V23.6111C25 24.375 24.375 25 23.6111 25C10.5694 25 0 14.4306 0 1.38889C0 0.625 0.625 0 1.38889 0H6.25C7.01389 0 7.63889 0.625 7.63889 1.38889C7.63889 3.125 7.91667 4.79167 8.43055 6.34722C8.58333 6.83333 8.47222 7.375 8.08333 7.76389L5.02778 10.8194Z" fill="#ACACAC" />
                    </Svg>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default ModalUser

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: ENUM_COLOR.white,
        marginLeft: 20,
        marginRight: 20,
        paddingVertical: 60,
        borderRadius: 4
    },
    contentModal: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    jobName: {
        marginTop: 40,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: ENUM_COLOR.black,
        borderRadius: 10,
    },
    infoTeam: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    name: {
        fontWeight: '700',
        fontSize: 22,
    },
    infoText: {
        fontSize: 22,
    },
})