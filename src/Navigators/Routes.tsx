/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '@components/CustomDrawer'

// import Ionicons from 'react-native-vector-icons/Ionicons'

import ListStaff from '@screens/ListStaff'
import TimeWork from '@screens/TimeWork'
import Request from '@screens/Request'
import Notification from '@screens/Notification'
// import TabRoutes from './TabRoutes'

const Drawer = createDrawerNavigator()

const Routers = () => {
    return (
        <Drawer.Navigator
            // eslint-disable-next-line react/no-unstable-nested-components
            drawerContent={props => <CustomDrawer {...props} />}
            // screenOptions={{
            //     headerShown: false,
            //     drawerActiveBackgroundColor: '#aa18ea',
            //     drawerActiveTintColor: '#fff',
            //     drawerInactiveTintColor: '#333',
            //     drawerLabelStyle: {
            //         marginLeft: -25,
            //         fontSize: 15,
            //     },
            // }}
            useLegacyImplementation
        >
            {/* <Drawer.Screen name="Home" component={TabRoutes} /> */}
            <Drawer.Screen
                name="ListStaff"
                component={ListStaff}
                
            // options={{
            //   drawerIcon: ({color}) => (
            //     <Ionicons name="person-outline" size={22} color={color} />
            //   ),
            // }}
            />
            <Drawer.Screen
                name="TimeWork"
                component={TimeWork}
            // options={{
            //   drawerIcon: ({color}) => (
            //     <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
            //   ),
            // }}
            />
            <Drawer.Screen
                name="Requests"
                component={Request}
            // options={{
            //   drawerIcon: ({color}) => (
            //     <Ionicons name="timer-outline" size={22} color={color} />
            //   ),
            // }}
            />
            <Drawer.Screen
                name="Settings"
                component={Notification}
            // options={{
            //   drawerIcon: ({color}) => (
            //     <Ionicons name="settings-outline" size={22} color={color} />
            //   ),
            // }}
            />
        </Drawer.Navigator>
    )
}
export default Routers
