import React, { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native'
import animation from '../../../assets/mask.json'

const MaskedAnimation = (): ReactElement => {
  return (
    <View>
      <LottieView
        autoPlay
        loop
        source={animation}
        autoSize
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    backgroundColor: '#fff'
  }
})

export default MaskedAnimation
