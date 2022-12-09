import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import initfirebase from '../config';

const SignIn = (props) => {
  const auth = initfirebase.auth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/chat-removebg-preview.png')}
        style={styles.logo}
      />
      <Text style={styles.text}> Welcome to ChillaChat</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText={'Email'}
        iconType={'user'}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText={'Password'}
        secureTextEntry={true}
        iconType='lock'
      />
      <FormButton
        ButtonTitle="Sign In"
        onPress={ () => 
          auth.signInWithEmailAndPassword(email, password)
            .then(() => {
              props.navigation.replace("home");
            })
            .catch((error) => {
              alert(error);})}
      />
      <TouchableOpacity style={styles.forgetButton} onPress={() => { }}>
        <Text style={{ color: '#808080', marginTop: 15, marginBottom: 40 }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <SocialButton
        ButtonTitle="Sign In with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => { }}

      />
      <SocialButton
        ButtonTitle="Sign In with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => { }}

      />

      <TouchableOpacity style={styles.forgetButton} onPress={() => props.navigation.navigate('signup')}>
        <Text style={{ color: '#808080', marginTop: 15 }}>
          Don't have an account? Create here
        </Text>
      </TouchableOpacity>



    </View>

  )
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#45519A',
  },
});