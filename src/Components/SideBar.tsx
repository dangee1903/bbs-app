/* eslint-disable react/react-in-jsx-scope */
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from '@expo/vector-icons'
import ListStaff from '@screens/ListStaff'
import Noti from '@screens/Noti'
import TimeWork from '@screens/TimeWork'
import Request from '@screens/Request'
import { TabHome } from '@navigators/TabRoutes'

export const SideBar = [
  {
    route: 'Homes',
    label: 'Home',
    icon: <MaterialIcons name="home" size={19} color="black" />,
    component: TabHome,
    showHeader: false,
  },
  {
    route: 'ListStaff',
    label: 'ListStaff',
    icon: <FontAwesome name="address-book" size={19} color="black" />,
    component: ListStaff,
    showHeader: true,
  },
  {
    route: 'TimeWork',
    label: 'TimeWork',
    icon: <MaterialCommunityIcons name="alarm" size={19} color="black" />,
    component: TimeWork,
    showHeader: true,
  },
  {
    route: 'Request',
    label: 'Request',
    icon: (
      <MaterialCommunityIcons
        name="shield-account-variant"
        size={19}
        color="black"
      />
    ),
    component: Request,
    showHeader: true,
  },
  {
    route: 'Noti',
    label: 'Noti',
    icon: <Ionicons name="notifications" size={20} color="black" />,
    component: Noti,
    showHeader: true,
  },
]
