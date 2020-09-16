import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

interface Params {
  email: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Home = () => {
  const route = useRoute()
  const { email } = route.params as Params
  return (
    <View style={styles.container}>
      <View style={styles.helloView}>
        <Text style={styles.helloText}>
          Hello {email} <Icon name="smile" size={20} />
        </Text>
      </View>
      <View style={styles.boxView}>
        <View style={styles.box}>
          <View style={styles.boxItem}>
            <Text style={styles.boxText}>R$ 140.244,59</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.boxItem}>
            <Text style={styles.boxText}>R$ 140.244,59</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 10
  },
  box: {
    width: 150,
    height: 100,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    margin: 10
  },
  boxItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxText: {
    fontSize: 16
  },
  helloText: {
    fontSize: 20,
    textAlign: 'left'
  },
  helloView: {
    width: 400,
    marginTop: 10,
    marginLeft: 15
  }
})

export default Home
