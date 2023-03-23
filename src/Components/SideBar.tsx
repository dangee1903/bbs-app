/* eslint-disable react/react-in-jsx-scope */
import { FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import ListStaff from '@screens/ListStaff'
import Noti from '@screens/Noti'
import TimeWork from '@screens/TimeWork'
import Request from '@screens/Request'
import { TabHome } from '@navigators/TabRoutes'
import { Path, Svg } from 'react-native-svg'

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
      <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
        <Path
          d="M10 8.16667H15L18 5.41667L15 2.66667H10V0.833334H8V2.66667H1V8.16667H8V10H3L0 12.75L3 15.5H8V19.1667H10V15.5H17V10H10V8.16667Z"
          fill={color}
        />
      </Svg>
    ),
    component: Noti,
    showHeader: true,
  },
]
