import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native'
import CustomButton from '../../components/CustomBtn';
import IconText from '../../components/IconText';
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';

const Report = (props) => {
  const refRBSheet = useRef();
  const [image, setImage] = useState({
    sourceURL: '',
    mime: '',
    path: '',
  });
  const attachScreenShot = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        // const path = image.sourceURL;
        setImage(image);
        //setLoading(true);
        //handleUserProfileImage(image);
      })
      .catch(err => err);
  };
  const navigateNext = () => {
    refRBSheet.current.close()
    props.navigation.navigate('Feature')
  }

  return(
    <View style= {styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.form}>
            <Text style={styles.label}>What issue are you reporting</Text>
            <TextInput
            placeholderTextColor={'#989898'} 
            placeholder='Tell us what happened' style={styles.input} />
          </View>
          <View>
            <Text style={styles.label}>Anything else you would like us to know?</Text>
            <TextInput 
            placeholderTextColor={'#989898'} 
            placeholder='Any extra information to describe the issue' multiline numberOfLines={5} style={styles.input} />
          </View>
        </View>
        <View style={styles.cameraContainer}>
          <View>
           <IconText text={"Attach screenshot"} color={"#372AA4"} src={require('../../assets/camera.png')} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
            <CustomButton onPress={() => refRBSheet.current.open()} text="Submit" />
        </View>
        <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View style={styles.viewContainer}>
            <Text style={styles.textStyle}>What issue would you like to resolve?</Text>
            <View style={styles.lower}>
            <IconText text={"Report suspicious activity"} color={"#2F2F2F"} src={require('../../assets/active.png')} />
            </View>
            <View style={styles.lower}>
            <IconText text={"Report a problem"} color={"#2F2F2F"} src={require('../../assets/report_problem.png')} />
            </View>
            <View style={styles.lower}>
            <IconText pressed={navigateNext} text={"Other"} color={"#2F2F2F"} src={require('../../assets/report.png')} />
            </View>
        </View>
      </RBSheet>
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
  viewContainer: {
    padding: 20
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 25
  },
  lower: {
    borderBottomColor: '#DEE2E6',
    borderBottomWidth: 1,
    minHeight: 45,
    justifyContent: 'center'
  },
  input: {
    borderColor: '#DEE2E6',
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  label: {
    color: '#2F2F2F',
    marginBottom: 8
  },
  textStyle: {
    textAlign: 'center',
    color: '#2F2F2F',
    fontWeight: '700',
    marginBottom: 10
  },
  cameraContainer: {
    backgroundColor: 'white',
    minHeight: 78,
    marginVertical: 25,
    justifyContent: 'center',
    paddingHorizontal: 25
  }
})


export default Report