import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const checkUserData = (): boolean => {
    const mockedUserData = { email: 'matheus.brunelli', password: 'pass@123' }
    const receivedUserData = { email: email, password: password }
    if (receivedUserData.email === mockedUserData.email && receivedUserData.password === mockedUserData.password) {
      return true
    }
    return false
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
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
  }
})

export default Login
