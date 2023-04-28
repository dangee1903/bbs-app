/* eslint-disable react/react-in-jsx-scope */
import { FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import ListStaff from '@screens/ListStaff'
import Noti from '@screens/Noti'
import TimeWork from '@screens/TimeWork'
import Request from '@screens/Request'
import { TabHome } from '@navigators/TabRoutes'
import ListRule from '@screens/Rule'
import IconNotiSidebar from '../Icon/IconNotiSidebar'
import IconRuleSidebar from '../Icon/IconRuleSideBar'

export const SideBar = [
  {
    route: 'HomeTabs',
    label: 'Trang chủ',
    icon: (color: string) => <Entypo name="home" size={18} color={color} />,
    component: TabHome,
    showHeader: false,
    key: 'HomeStack',
  },
  {
    route: 'ListStaff',
    label: 'Danh sách nhân viên',
    icon: (color: string) => (
      <FontAwesome name="address-book" size={19} color={color} />
    ),
    component: ListStaff,
    showHeader: true,
    key: 'ListStaff',
  },
  {
    route: 'TimeWork',
    label: 'Giờ làm việc',
    icon: (color: string) => (
      <MaterialCommunityIcons name="alarm" size={17} color={color} />
    ),
    component: TimeWork,
    showHeader: true,
    key: 'TimeWork',
  },
  {
    route: 'Request',
    label: 'Xin phép',
    icon: (color: string) => (
      <MaterialCommunityIcons
        name="shield-account-variant"
        size={18}
        color={color}
      />
    ),
    component: Request,
    showHeader: true,
    key: 'Request',
  },
  {
    route: 'Noti',
    label: 'Thông báo',
    icon: (color: string) => (
      // eslint-disable-next-line import/extensions, global-require
      <IconNotiSidebar color={color} />
    ),
    component: Noti,
    showHeader: true,
    key: 'Noti',
  },
  {
    route: 'Rule',
    label: 'Nội quy',
    icon: (color: string) => (
      // eslint-disable-next-line import/extensions, global-require
      <IconRuleSidebar color={color} />
    ),
    component: ListRule,
    showHeader: true,
    key: 'Rule',
  },
]
