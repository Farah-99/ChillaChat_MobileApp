import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { width, height } from '../utils/Dimensions';

const FormButton = ({ButtonTitle, ...rest}) => {
  return (
    <TouchableOpacity style ={styles.buttonContainer }{...rest}>
        <Text style={styles.buttonText } >
        {ButtonTitle}
        </Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        marginRight: 10,
        width: '50%',
        height: height / 15,
        backgroundColor: '#9BA5FC',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
      },
});