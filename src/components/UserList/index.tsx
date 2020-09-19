import React, { ReactElement } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { userList } from '../../helpers/'

const UserList = (): ReactElement => {
  return (
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
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  item: {
    fontSize: 16
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default UserList
