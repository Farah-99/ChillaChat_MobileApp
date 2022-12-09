import { View, Text,StyleSheet, FlatList , Image } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import initfirebase from '../../config';

export default function List(props) {

  const [data, setData]= useState([{}]); 
  const database=initfirebase.database();
  const ref_profils=database.ref("profils"); 



  useEffect(() => {
    
    ref_profils.on("value", (dataSnapchot)=> {
      let d =[];
      dataSnapchot.forEach((profil) => {
        console.log(profil);
        d.push(profil.val());
        
      });
      setData(d);
      console.log(d)
    })

    return () => {
      ref_profils.off();
    }
  
  }, [])
  

  return (
    <View style={styles.container}> 
      <Text style={styles.text}>List of Friends </Text>

      <FlatList  style = {styles.flatlist}

      data={data} 

      renderItem={ ({item})=> (
      <View style={styles.view}>
          <Image
          style={{width:60, height:60 }}
          source={require("../../assets/onboarding-img1.png")} 
          >
          </Image>
          <Text style ={{ paddingLeft:3, paddingRight:10}}>{item.nom}</Text>
          <Text style ={{ paddingLeft:3, paddingRight:10}} >{item.prenom}</Text>
          <Text onPress={()=> {props.navigation.navigate("chat");}} style ={{ fontWeight:'bold', paddingLeft:3, paddingRight:10}}> {item.pseudo}</Text>
          
          
          
          
          

      </View>
      )}

      ></FlatList>
    </View>
  )
}


const styles = StyleSheet.create({
  view :{

    height:62,
    margin:5,
    borderWidth:1,
    borderColor:"gray",
    borderRadius:4,
    flexDirection:"row",
    alignItems:"flex-start",
    width:"98%"

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },


  text: {
    fontSize: 40,
    marginTop:5,
    marginBottom: 10,
    color: '#45519A',
    fontWeight: 'bold',
  },
  flatlist:{
    width:"90%",
    height:"100%",
    backgroundColor:"white",
    marginTop:10,
    marginBottom:10,
    borderRadius:4,
    borderWidth:1,
    padding:5,
    flex:1,
    borderColor:"white",
  },
  
});