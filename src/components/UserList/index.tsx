import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { userList } from '../../helpers/'

const UserList = (): React.ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500)
  }, [])
  return (
    isLoading
      ? (
        <View style={styles.activityView}>
          <ActivityIndicator size="large" color="blue"/>
        </View>
      )
      : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Name</Text>
            <Text style={styles.headerTitle}>Age | Weight</Text>
          </View>
          {userList.map((u, i) => (
            <View key={i} style={styles.listContainer}>
              <Text style={styles.item}>{u.name}</Text>
              <Text style={styles.item}>{u.age} | {u.weight}</Text>
            </View>
          ))}
        </View>
      )
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: '100%'
  },
  item: {
    fontSize: 16
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: '#ccc'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  activityView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 300
  }
})

export default UserList
