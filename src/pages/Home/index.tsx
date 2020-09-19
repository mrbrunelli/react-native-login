import React, { ReactElement } from 'react'
import { useRoute } from '@react-navigation/native'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import UserList from '../../components/UserList'
import { randomMoneyValue } from '../../helpers/random-money-value'

interface Params {
  email: string
}

const Home = (): ReactElement => {
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
        <View style={[styles.box, styles.shadow]}>
          <View style={styles.boxItem}>
            <Text style={styles.boxText}>{randomMoneyValue()}</Text>
          </View>
        </View>
        <View style={[styles.box, styles.shadow]}>
          <View style={styles.boxItem}>
            <Text style={styles.boxText}>{randomMoneyValue()}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.title}>List of users</Text>
      <ScrollView style={[styles.scroll, styles.shadow]}>
        <UserList/>
      </ScrollView>
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
    width: 300,
    marginTop: 10
  },
  scroll: {
    margin: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.50,
    shadowRadius: 4.84,
    elevation: 8
  }
})

export default Home
