import React, { useState, useRef, useEffect, ReactElement } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FadeInIcon from '../../components/FadeInIcon'

const Login = (): ReactElement => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const checkUserData = (): void => {
    const mockedUserData = { email: 'matheus.brunelli', password: 'pass@123' }
    const receivedUserData = { email: email, password: password }
    if (receivedUserData.email === mockedUserData.email && receivedUserData.password === mockedUserData.password) {
      navigation.navigate('Home', {
        email: email
      })
    } else {
      Alert.alert('Incorrectly data', 'Check your user and password')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <View style={styles.iconView}>
          <FadeInIcon/>
        </View>
        <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="Enter a valid e-mail"
          style={styles.input}
        />
        <TextInput
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Enter your password"
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => checkUserData()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
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
  inputView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 300,
    padding: 10,
    margin: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  button: {
    width: 300,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  },
  iconView: {
    marginBottom: 20
  }
})

export default Login
