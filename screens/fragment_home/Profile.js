import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { height, width } from "../../utils/Dimensions";
import AppLoading from 'expo-app-loading';
import useFonts from '../../useFonts';
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

export default function Profile() {






  
  const database = initfirebase.database();
  const storage = initfirebase.storage();

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [image, setImage] = useState(null);


  const imageToBlob =  async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) { 
        reject(new TypeError("Network Request Failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  return blob;
  }



  const uploadImage = async (uri) => {
    //convert image to blob (binary large object)
    const blob = await imageToBlob(uri);
    //save blob to refrence image
   const ref_image = storage.ref("imageprofiles").child("image2.jpg").put(blob);
   await ref_image.put(blob);
    // get url of image
    const url = await ref_image.getDownloadURL();
    return url;
  }
 
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };



    const [IsReady, SetIsReady] = useState(false);
    const LoadFonts = async () => {
      await useFonts();
    };
  

    if (!IsReady) {
      return (
        <AppLoading
          startAsync={LoadFonts}
          onFinish={() => SetIsReady(true)}
          onError={() => {}}
        />
      );
      }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add a Friend</Text>
      <TouchableOpacity onPress={() => {pickImage();}}>
        <Image
          
           source= {image === null ?
           require("../../assets/download.png") :{uri: image}}
           
          style={{
            resizeMode: "contain",
            height: 150,
            width: 150,
          }}
          
        />

      </TouchableOpacity>

      <TextInput
        onChangeText={(text) => {
          setNom(text);
        }}
        textAlign="center"
        placeholderTextColor="gray"
        placeholder="Nom"
        keyboardType="name-phone-pad"
        style={styles.inputField}
      ></TextInput>

      <TextInput
        onChangeText={(text) => {
          setPrenom(text);
        }}
        textAlign="center"
        placeholderTextColor="gray"
        placeholder="Prenom"
        keyboardType="name-phone-pad"
        style={styles.inputField}
      ></TextInput>

      <TextInput
        onChangeText={(text) => {
          setPseudo(text);
        }}
        placeholderTextColor="gray"
        textAlign="center"
        placeholder="Numero"
        keyboardType="phone-pad"
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
            
            if (image != null) {
            /*const url = await uploadImage(image);*/
            const ref_profils = database.ref("profils");
            const key = ref_profils.push().key;
            ref_profils.child("profil" + key).set({
              nom: nom,
              prenom: prenom,
              pseudo: pseudo,
            });
            alert("Profile created")
          }
          }}
          style={{
            fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
          }}
        >
          Save
        </Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  textinputstyle: {
    backgroundColor: "black",
    fontSize: 20,
    color: "white",
    width: "75%",
    height: 50,
    borderRadius: 10,
    margin: 5,
  },
  textstyle: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop:5,
    marginBottom: 10,
    color: '#45519A',
    fontFamily: 'lato-regular',
},
  container: {
    color: "white",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
    inputContainer: {
      marginTop: 5,
      marginBottom: 10,
      marginRight: 10,
      paddingLeft: 10,
      width: '90%',
      height: height / 15,
      borderColor: '#ccc',
      borderRadius: 3,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
   
    input: {
      padding: 10,
      flex: 1,
      fontSize: 16,
      fontFamily: 'Lato-Regular',
      color: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputField: {
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      width: width / 1.5,
      height: height / 15,
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor:'gray'
    },
  });
