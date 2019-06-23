import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import LoginForm from './LoginForm';

export default class Login extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headBackground} />

        <KeyboardAvoidingView behavior="position">
          <View>
            <Text style={styles.logo}>UDAC</Text>
            <Text style={styles.logoDescription}>Property & Tax Survey</Text>
            <ScrollView>
              <View style={styles.loginArea}>
                <Text style={styles.loginAreaTitle}>Property Tax Servey</Text>
                <Text style={styles.loginAreaDesc}>
                  Unique Door No Easily Fill Your Entire Property Tax Using App
                </Text>

                <LoginForm />
              </View>
            </ScrollView>

            <View style={styles.signUpArea}>
              <Text style={styles.signUpDescription}>Don't have an account</Text>
              <TouchableOpacity>
                <Text>Sign Up</Text>
              </TouchableOpacity>
            </View>

          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 80
  },
  headBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 250,
    width: '100%',
    backgroundColor: '#1572de'
  },
  logo: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f2f2f2'
  },
  logoDescription: {
    textAlign: 'center',
    color: '#f2f2f2'
  },
  loginArea: {
    marginHorizontal: 40,
    marginVertical: 40,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,

    shadowColor: 'black',
    shadowOpacity: .2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2
  },
  loginAreaTitle: {
    fontSize: 20,
    textAlign: 'center'
  },
  loginAreaDesc: {
    fontSize: 11,
    color: '#7e868f',
    marginVertical: 10,
    textAlign: 'center'
  },
  signUpArea: {
    alignItems: 'center',
  },
  signUpDescription: {
    color: '#999'
  },
  signUpText: {
    color: '#666'
  }
});
