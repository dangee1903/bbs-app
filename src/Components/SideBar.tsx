/* eslint-disable react/react-in-jsx-scope */
import { FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import ListStaff from '@screens/ListStaff'
import Noti from '@screens/Noti'
import TimeWork from '@screens/TimeWork'
import Request from '@screens/Request'
import { TabHome } from '@navigators/TabRoutes'
import IconNotiSidebar from './Icon/IconNotiSidebar'

export const SideBar = [
  {
    route: 'TabHome',
    label: 'TabHome',
    icon: (color: string) => <Entypo name="home" size={18} color={color} />,
    component: TabHome,
    showHeader: false,
  },
  {
    route: 'ListStaff',
    label: 'ListStaff',
    icon: (color: string) => (
      <FontAwesome name="address-book" size={19} color={color} />
    ),
    component: ListStaff,
    showHeader: true,
  },
  {
    route: 'TimeWork',
    label: 'TimeWork',
    icon: (color: string) => (
      <MaterialCommunityIcons name="alarm" size={17} color={color} />
    ),
    component: TimeWork,
    showHeader: true,
  },
  {
    route: 'Request',
    label: 'Request',
    icon: (color: string) => (
      <MaterialCommunityIcons
        name="shield-account-variant"
        size={18}
        color={color}
      />
    ),
    component: Request,
    showHeader: true,
  },
  {
    route: 'Noti',
    label: 'Noti',
    icon: (color: string) => (
      // eslint-disable-next-line import/extensions, global-require
      <IconNotiSidebar color={color} />
    ),
    component: Noti,
    showHeader: true,
  },
]
