import React from 'react'
import Svg, { Path } from 'react-native-svg'

type TProps = {
  color?: string
}

const IconPhone = ({ color = 'none' }: TProps) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill={color}>
      <Path
        d="M5.02778 10.8194C7.02778 14.75 10.25 17.9583 14.1806 19.9722L17.2361 16.9167C17.6111 16.5417 18.1667 16.4167 18.6528 16.5833C20.2083 17.0972 21.8889 17.375 23.6111 17.375C24.375 17.375 25 18 25 18.7639V23.6111C25 24.375 24.375 25 23.6111 25C10.5694 25 0 14.4306 0 1.38889C0 0.625 0.625 0 1.38889 0H6.25C7.01389 0 7.63889 0.625 7.63889 1.38889C7.63889 3.125 7.91667 4.79167 8.43055 6.34722C8.58333 6.83333 8.47222 7.375 8.08333 7.76389L5.02778 10.8194Z"
        fill="#ACACAC"
      />
    </Svg>
  )
}

export default IconPhone
