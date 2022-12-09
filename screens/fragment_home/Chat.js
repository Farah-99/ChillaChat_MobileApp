import React from 'react'
import { height, width } from '../../utils/Dimensions'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import initfirebase from "../../config";


const database = initfirebase.database();

export default function Chat() {
  const [msg, setmsg] = React.useState('')
  return (
    <View style={styles.container}>
      <View style={styles.header}>

      </View>
    <TextInput
    onChangeText={(msg) => {
      setmsg(msg);
    }}
    textAlign="center"
    placeholderTextColor="gray"
    placeholder="Type your message here"
    keyboardType="name-phone-pad"
    style={styles.inputField}
  ></TextInput>
  <TouchableHighlight
        disabled={false}
        activeOpacity={0.5}
        underlayColor="#DDDDDD"
        style={{
          marginTop: 10,
          marginRight: 10,
          width: '40%',
          height: height / 15,
          backgroundColor: '#9BA5FC',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 3,
  
        }}
      >
        <Text
          onPress={async() => {
            
           
           
            const ref_msg = database.ref("msgS");
            const key = ref_msg.push().key;
            ref_msg.child("msg1" + key).set({
              msg: msg,
            });
            alert("Message Sent")
          
          }}
          style={{
            fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
          }}
        >
          Send
        </Text>
      </TouchableHighlight>
  </View>

  )
}
const styles = StyleSheet.create({
 
    inputField: {
      padding: 15,
      marginTop: 10,
      marginBottom: 5,
      width: width / 1.1,
      height: height / 15,
      fontSize: 16,
      fontFamily: 'Lato-Regular',
      borderRadius: 8,
      borderWidth: 1,
      borderColor:'gray'
    },
    container: {
      color: "white",
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
  });
