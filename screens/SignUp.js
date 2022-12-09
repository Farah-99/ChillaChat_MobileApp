import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';


const Signup = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm_password, setConfirmPassword] = useState();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/chat-removebg-preview.png')}
        style={styles.logo}
      />

      <Text style={styles.text}> Create an account</Text>
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
      <FormInput
        labelValue={confirm_password}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText={'Confirm Password'}
        secureTextEntry={true}
        iconType='lock'
      />
      <FormButton
        ButtonTitle="Sign Up"
        onPress={() => alert('Sign Up Clicked')}
      />


      <View style={styles.textPrivate}>
        <Text style={styles.color_TextPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('No way Ta9rahom!')}>
          <Text style={[styles.color_TextPrivate, { color: '#DA9A9B' }]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_TextPrivate}> and </Text>
        <Text style={[styles.color_TextPrivate, { color: '#DA9A9B' }]}>
          Privacy Policy
        </Text>
      </View>

      <SocialButton
        ButtonTitle="Sign Up with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => { }}

      />
      <SocialButton
        ButtonTitle="Sign Up with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => { }}

      />
      <TouchableOpacity style={styles.forgetButton} onPress={() => props.navigation.navigate('signin')}>
        <Text style={{ color: '#808080', marginTop: 10 }}>
          Have an account? Sign in here
        </Text>
      </TouchableOpacity>
     





    </View>

  )
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 150,
    width: 200,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginTop:5,
    marginBottom: 10,
    color: '#45519A',
  },
  color_TextPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: '#808080',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    justifyContent: 'center',
  },
});