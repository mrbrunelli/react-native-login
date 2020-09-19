import React, { ReactElement } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { userList } from '../../helpers/'

const UserList = (): ReactElement => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Name</Text>
        <Text style={styles.headerTitle}>Age | Weight</Text>
      </View>
      <FlatList
        data={userList}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.container}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.age} | {item.weight}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    textAlign: 'center',
    margin: 20
  },
  item: {
    fontSize: 16
  },
  container: {
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
