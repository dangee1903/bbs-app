/* eslint-disable react/react-in-jsx-scope */
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import ListStaff from '@screens/ListStaff'
import Noti from '@screens/Noti'
import TimeWork from '@screens/TimeWork'
import Request from '@screens/Request'
import Svg, { Path } from 'react-native-svg'
import { TabHome } from '@navigators/TabRoutes'

export const SideBar = [
  {
    route: 'Home',
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
    icon: (
      <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
        <Path
          d="M10 8.16667H15L18 5.41667L15 2.66667H10V0.833334H8V2.66667H1V8.16667H8V10H3L0 12.75L3 15.5H8V19.1667H10V15.5H17V10H10V8.16667Z"
          fill="black"
        />
      </Svg>
    ),
    component: Noti,
    showHeader: true,
  },
]
