import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { width, height } from '../utils/Dimensions';

import FontAwesome from 'react-native-vector-icons/FontAwesome';


const SocialButton = ({ButtonTitle, btnType, color, backgroundColor,...rest}) => {
    let bgColor = backgroundColor;
  return (
    <TouchableOpacity style ={[styles.buttonContainer, {backgroundColor: bgColor}]} {...rest}>
        <View style = {styles.iconWrapper}>
            <FontAwesome name={btnType}  style = {styles.icon} size={25} color={color} />
        </View>
        <View style = {styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color:color}] } >
        {ButtonTitle}
        </Text>
        </View>
        
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '50%',
        height: height / 15,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,
      },
      iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        fontWeight: 'bold',
      },
      btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
      },
});