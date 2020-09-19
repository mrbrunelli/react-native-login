import React, { useRef, useEffect, ReactElement, ReactComponentElement } from 'react'
import { Animated } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const FadeIcon = (): ReactElement => {
  useEffect(() => {
    fadeIn()
  },[])
  const fadeAnimation = useRef(new Animated.Value(0)).current
  const fadeIn = (): void => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true
    }).start()
  }
  return (
    <Animated.View
      style={{ opacity: fadeAnimation }}
    >
      <Icon name="feather" size={50} color="blue" />
    </Animated.View>
  )
}

export default FadeIcon
