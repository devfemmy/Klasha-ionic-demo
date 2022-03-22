import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native'
import CustomButton from '../../components/CustomBtn';
import IconText from '../../components/IconText';
import Modal from "react-native-modal";

const FeatureSuggestion = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const goToHome = () => {
    setModalVisible(false);
    props.navigation.popToTop()
  }
  return(
    <View style= {styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.form}>
            <Text style={styles.label}>Give your feature a title</Text>
            <TextInput
            placeholderTextColor={'#989898'} 
            placeholder='Give your feature a title' style={styles.input} />
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>What kind of feature is this?</Text>
            <TextInput
            placeholderTextColor={'#989898'} 
            placeholder='What kind of feature is this?' style={styles.input} />
          </View>
          <View>
            <Text style={styles.label}>Tell us more about this feature?</Text>
            <TextInput 
            placeholderTextColor={'#989898'} 
            placeholder='Type a description' multiline numberOfLines={5} style={styles.input} />
          </View>
        </View>
        <View style={styles.cameraContainer}>
          <View>
           <IconText text={"Attach screenshot"} color={"#372AA4"} src={require('../../assets/camera.png')} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
            <CustomButton onPress={() => setModalVisible(true)} text="Complete" />
        </View>
        <Modal onBackButtonPress={() => console.log('pressed')} isVisible={isModalVisible}>
          <View style={styles.modal}>
            <Image source={require('../../assets/success.png')} />
            <Text style={{textAlign: 'center', color: '#2F2F2F', fontWeight: 'bold', fontSize: 18}}>Suggestion sent!</Text>
            <Text style={styles.textStyle4}>Awesome! We’ll share your suggestion with other users to vote on. The highest voted features would be reviewed by the Cauli team</Text>
            <View style={{width: '100%'}}>
              <CustomButton onPress={goToHome} text="Go to Home" />
            </View>
          </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 25
  },
  textStyle4: {
    color: '#7A869A',
    lineHeight: 20,
    textAlign: 'center',
    marginVertical: 5,
  },
  input: {
    borderColor: '#DEE2E6',
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  modal: {
    backgroundColor: 'white',
    minHeight: 200,
    padding: 20,
    alignItems: 'center'
  },
  label: {
    color: '#2F2F2F',
    marginBottom: 8
  },
  cameraContainer: {
    backgroundColor: 'white',
    minHeight: 78,
    marginVertical: 25,
    justifyContent: 'center',
    paddingHorizontal: 25
  }
})


export default FeatureSuggestion