import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';
import { TextInput, Button, TouchableOpacity } from 'react-native';
import initfirebase from '../config';

export default function Auth(props) {
  const auth = initfirebase.auth();
  const [email, setEmail] = useState("Okay")
  const [pwd, setPwd] = useState("")

  return (
    <ImageBackground
      source={require('../assets/img.jpg')}
      style = {styles.container}
    
    >

    
      <StatusBar style="dark" />
      <View style={styles.container2}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: 'bold',
          }}
        > {" "}
          Authentification</Text>

        <TextInput style={styles.textinput}
          placeholder="email@site.com"
          keyboardType='email-address'
          onChangeText={(e) => setEmail(e)}
        ></TextInput>
        <TextInput style={styles.textinput}
          secureTextEntry={true}
          placeholder="password"
          keyboardType='default'
          onChangeText={(e) => setPwd(e)}
        ></TextInput>

        <Button  color="black"    title={"Login"}
        /*onPress = {()  => { alert(email + ": " + pwd);
       }}*/
       onPress={ () => 
        auth.signInWithEmailAndPassword(email, pwd)
          .then(() => {
            props.navigation.replace("home");
          })
          .catch((error) => {
            alert(error);})}
       ></Button>
        
        <TouchableOpacity style={{alignItems: 'flex-end', width: '89%'}}>
                    <Text onPress={() => {props.navigation.navigate("signup")}}
                    style={{color : "white", paddingTop: 20, fontStyle: 'italic'}}>
                        New user! Create Account.
                    </Text>
                </TouchableOpacity>

      </View>
    </ImageBackground >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    height: 300,
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#0003',
    borderRadius: 10,
    paddingTop : 30,

  },
  textinput:{
    backgroundColor: "white",
    width:"90%" ,
    height: 40 ,
    textAlign : "center" , 
    borderRadius: 8 ,
    margin: 10 ,
},


});
