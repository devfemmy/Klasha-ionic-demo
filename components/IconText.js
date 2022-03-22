import React from 'react';
import {Text,View, StyleSheet, Image, TouchableOpacity} from 'react-native'

const IconText = ({src, text, color, pressed}) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    textStyle: {
      marginLeft: 15,
      color: color
    },
    imageStyle: {
      width: 20,
      height: 20,
      resizeMode: 'contain'
    }
  });
  return(
    <TouchableOpacity onPress={pressed} style={styles.container}>
      <Image style={styles.imageStyle} source={src} />
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

export default IconText;