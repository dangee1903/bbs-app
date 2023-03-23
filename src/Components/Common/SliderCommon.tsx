import Slider from '@react-native-community/slider'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

type TProps = {
  value: number
  min?: number
  max?: number
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => void
  name: string
  errors?: string
}

const SliderCommon = ({
  value,
  min = 0,
  max = 100,
  setFieldValue,
  name,
  errors,
}: TProps) => {
  const handleChange = (progress: number) => {
    setFieldValue(
      name,
      Number.isInteger(progress) ? progress : progress.toFixed(),
    )
  }

  return (
    <>
      <Text>
        Progress
        {`(${Number.isInteger(value) ? value.toFixed() : value}%)`}
      </Text>
      <Slider
        style={{ height: 40, width: '100%'}}
        minimumValue={min}
        maximumValue={max}
        minimumTrackTintColor="#751FF0"
        maximumTrackTintColor="#CBAAFA"
        thumbTintColor="#751FF0"
        onSlidingComplete={handleChange}
        value={value}
      />
      {errors && <Text style={{ fontSize: 10, color: 'red' }}>{errors}</Text>}
    </>
  )
}

export default SliderCommon

const styles = StyleSheet.create({
  label: {
    marginTop: 10,
  },
})
