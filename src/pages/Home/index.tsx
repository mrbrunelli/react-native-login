import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

interface Params {
  email: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Home = () => {
  const route = useRoute()
  const { email } = route.params as Params
  return <Text>Home Page {email}</Text>
}

export default Home
