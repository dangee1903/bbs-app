import React from 'react'
import Svg, { Path } from 'react-native-svg'

type TProps = {
  color: string
}

const IconNotiSidebar = ({ color = 'none' }: TProps) => {
  return (
    <Svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <Path
        d="M10 8.16667H15L18 5.41667L15 2.66667H10V0.833334H8V2.66667H1V8.16667H8V10H3L0 12.75L3 15.5H8V19.1667H10V15.5H17V10H10V8.16667Z"
        fill={color}
      />
    </Svg>
  )
}

export default IconNotiSidebar
