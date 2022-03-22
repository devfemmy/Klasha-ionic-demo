import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const CustomButton = (props) => {
    const styles = StyleSheet.create({
        btnContainer: {
            height: 50,
            alignItems: "center",
            justifyContent: 'center',
            backgroundColor: '#372AA4',
            marginVertical: 15,
            borderRadius: 5,
            marginHorizontal: 50
           
        },
        textColor: {
            color: '#fff',
            fontSize: 15,
            fontWeight: 'bold'
        }
    })
    return (
        <View>
            <TouchableOpacity onPress= {props.onPress} style= {styles.btnContainer}>
                <Text style= {styles.textColor}>
                  {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}



export default CustomButton;