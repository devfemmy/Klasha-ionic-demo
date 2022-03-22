import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const Home = (props) => {
  const isDarkMode = useColorScheme() === 'light';
  const [faqTypeGeneral, setFaqTypeGeneral] = useState(false);
  const [faqTypeSecurity, setFaqTypeSecurity] = useState(true);
  const [faqTypeProduct, setFaqTypeProduct] = useState(true);
  const [faqTypeFees, setFaqTypeFees] = useState(true);
  const [showGeneralWhat, setGeneralShowWhat] = useState(false);
  const [showGeneralWhy, setGeneralShowWhy] = useState(false);
  const [showGeneralWhat1, setGeneralShowWhat1] = useState(false);
  const [showGeneralWhat2, setGeneralShowWhat2] = useState(false);
  const [showGeneralWhat3, setGeneralShowWhat3] = useState(false);

  useEffect(() => {
    if (showGeneralWhat === true) {
      setGeneralShowWhy(false);
      setGeneralShowWhat1(false);
      setGeneralShowWhat2(false);
      setGeneralShowWhat3(false);
    } else if (showGeneralWhy === true) {
      setGeneralShowWhat(false);
      setGeneralShowWhat1(false);
      setGeneralShowWhat2(false);
      setGeneralShowWhat3(false);
    } else if (showGeneralWhat1 === true) {
      setGeneralShowWhat(false);
      setGeneralShowWhy(false);
      setGeneralShowWhat2(false);
      setGeneralShowWhat3(false);
    } else if (showGeneralWhat2 === true) {
      setGeneralShowWhat(false);
      setGeneralShowWhy(false);
      setGeneralShowWhat1(false);
      setGeneralShowWhat3(false);
    } else {
      setGeneralShowWhat(false);
      setGeneralShowWhy(false);
      setGeneralShowWhat1(false);
      setGeneralShowWhat2(false);
    }
  }, [
    handleClickGeneralWhat,
    handleClickGeneralWhy,
    handleClickGeneralWhat1,
    handleClickGeneralWhat2,
    handleClickGeneralWhat3,
  ]);

  const handleClickGeneralWhat = () => {
    setGeneralShowWhat(!showGeneralWhat);
  };
  const handleClickGeneralWhy = () => {
    setGeneralShowWhy(!showGeneralWhy);
  };
  const handleClickGeneralWhat1 = () => {
    setGeneralShowWhat1(!showGeneralWhat1);
  };
  const handleClickGeneralWhat2 = () => {
    setGeneralShowWhat2(!showGeneralWhat2);
  };
  const handleClickGeneralWhat3 = () => {
    setGeneralShowWhat3(!showGeneralWhat3);
  };

  const FaqQustion = ({question, details, handleClick, showWhat}) => {
    return (
      <View
        style={
          {
            // height: showWhat ? height * 0.2 : height * 0.1,
          }
        }>
        <View
          style={{
            width: width * 0.9,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 18,
          }}>
          <Text style={[styles.title, {color: 'rgba(55, 42, 164, 1)'}]}>
            {question}
          </Text>
          <TouchableOpacity onPress={handleClick}>
            <Image
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
              }}
              source={require('../../assets/faqs_add.png')}
            />
          </TouchableOpacity>
        </View>
        {showWhat && <Text style={styles.smallTitle}>{details}</Text>}
        <View
          style={{
            // height: 10,
            borderWidth: 0.3,
            borderBottomColor: 'rgba(222, 226, 230, 0.2)',
          }}
        />
      </View>
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <View>
        <View>
          <View
            style={{
              width: width,
              height: height / 23,
              resizeMode: 'contain',
              // tintColor: 'rgba(55, 42, 164, 1)',
            backgroundColor:faqTypeGeneral === false &&
            faqTypeSecurity &&
            faqTypeProduct &&
            faqTypeFees
              ? 'rgba(55, 42, 164, 1)'
              : faqTypeSecurity === false &&
                faqTypeGeneral &&
                faqTypeProduct &&
                faqTypeFees
              ? 'rgba(40, 175, 176, 1)'
              : faqTypeProduct === false &&
                faqTypeGeneral &&
                faqTypeSecurity &&
                faqTypeFees
              ? 'rgba(142, 131, 241, 1)'
              : faqTypeFees === false &&
                faqTypeGeneral &&
                faqTypeSecurity &&
                faqTypeProduct
              ? 'rgba(239, 121, 112, 1)'
              : 'white'
            }}
            // source={require('./assets/header_bg.png')}
          />
          <View
            style={{
              position: 'absolute',
              top: 5,
              left: 15,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                tintColor: 'rgba(255, 255, 255, 1)',
                marginRight: 10,
              }}
              source={
                faqTypeGeneral === false &&
                faqTypeSecurity &&
                faqTypeProduct &&
                faqTypeFees
                  ? require('../../assets/general.png')
                  : faqTypeSecurity === false &&
                    faqTypeGeneral &&
                    faqTypeProduct &&
                    faqTypeFees
                  ? require('../../assets/security.png')
                  : faqTypeProduct === false &&
                    faqTypeGeneral &&
                    faqTypeSecurity &&
                    faqTypeFees
                  ? require('../../assets/product.png')
                  : faqTypeFees === false &&
                    faqTypeGeneral &&
                    faqTypeSecurity &&
                    faqTypeProduct
                  ? require('../../assets/fees.png')
                  : null
              }
            />
            <Text style={[styles.midText, {fontWeight: '700', color: 'white'}]}>
              {faqTypeGeneral === false &&
              faqTypeSecurity &&
              faqTypeProduct &&
              faqTypeFees
                ? 'General'
                : faqTypeSecurity === false &&
                  faqTypeGeneral &&
                  faqTypeProduct &&
                  faqTypeFees
                ? 'Safety & Security'
                : faqTypeProduct === false &&
                  faqTypeGeneral &&
                  faqTypeSecurity &&
                  faqTypeFees
                ? 'Product'
                : faqTypeFees === false &&
                  faqTypeGeneral &&
                  faqTypeSecurity &&
                  faqTypeProduct
                ? 'Fees and Charges'
                : null}
            </Text>
          </View>
        </View>
        {/* questions */}
        <View
          // contentInsetAdjustmentBehavior="automatic"
          // showsVerticalScrollIndicator={false}
          style={{
            width: width,
            height: height / 2.5,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            paddingHorizontal: 20,
            paddingVertical: 20,
            paddingBottom: 50,
          }}>
          <FaqQustion
            question={'What is Cauli general?'}
            details={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
            }
            showWhat={showGeneralWhat}
            handleClick={handleClickGeneralWhat}
          />
          <FaqQustion
            question={'Why should I buy giftcards on Cauli general?'}
            details={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
            }
            showWhat={showGeneralWhy}
            handleClick={handleClickGeneralWhy}
          />
          <FaqQustion
            question={'What is Cauli 1 general?'}
            details={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
            }
            showWhat={showGeneralWhat1}
            handleClick={handleClickGeneralWhat1}
          />
          <FaqQustion
            question={'What is Cauli 2 general?'}
            details={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
            }
            showWhat={showGeneralWhat2}
            handleClick={handleClickGeneralWhat2}
          />
          <FaqQustion
            question={'What is Cauli 3 general?'}
            details={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
            }
            showWhat={showGeneralWhat3}
            handleClick={handleClickGeneralWhat3}
          />
        </View>
        {/* other categories */}
        <View
          style={{
            width: width,
            height: height / 2.2,
            backgroundColor: 'rgba(244, 245, 247, 1)',
            paddingHorizontal: 20,
            paddingTop: 20,
          }}>
          <View style={styles.infoHelpful}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 2,
              }}>
              <Text style={styles.title}>Was this information helpful? </Text>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 20,
                    height: 23,
                    resizeMode: 'contain',
                  }}
                  source={require('../../assets/faq_cancel.png')}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 2,
              }}>
              <TouchableOpacity style={styles.emojiBody}>
                <Text>😌</Text>
                <Text style={styles.smalltext}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.emojiBody}>
                <Text>😐</Text>
                <Text style={styles.smalltext}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[styles.title, {paddingTop: 15, paddingBottom: 10}]}>
            Other categories
          </Text>
          <ScrollView>
          {faqTypeGeneral === true ? (
            <TouchableOpacity
              style={styles.categoriesCard}
              onPress={() => {
                setFaqTypeGeneral(false);
                setFaqTypeSecurity(true);
                setFaqTypeProduct(true);
                setFaqTypeFees(true);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    tintColor: 'rgba(40, 175, 176, 1)',
                    marginRight: 10,
                  }}
                  source={require('../../assets/general.png')}
                />
                <Text style={styles.midText}>General </Text>
              </View>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  resizeMode: 'contain',
                }}
                source={require('../../assets/forward_faqs.png')}
              />
            </TouchableOpacity>
          ) : null}
          {faqTypeSecurity === true ? (
            <TouchableOpacity
              style={styles.categoriesCard}
              onPress={() => {
                setFaqTypeSecurity(false);
                setFaqTypeGeneral(true);
                setFaqTypeProduct(true);
                setFaqTypeFees(true);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    tintColor: 'rgba(40, 175, 176, 1)',
                    marginRight: 10,
                  }}
                  source={require('../../assets/security.png')}
                />
                <Text style={styles.midText}>Safety and Secutity </Text>
              </View>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  resizeMode: 'contain',
                }}
                source={require('../../assets/forward_faqs.png')}
              />
            </TouchableOpacity>
          ) : null}
          {faqTypeProduct === true ? (
            <TouchableOpacity
              style={styles.categoriesCard}
              onPress={() => {
                setFaqTypeProduct(false);
                setFaqTypeSecurity(true);
                setFaqTypeGeneral(true);
                setFaqTypeFees(true);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    tintColor: 'rgba(142, 131, 241, 1)',
                    marginRight: 10,
                  }}
                  source={require('../../assets/product.png')}
                />
                <Text style={styles.midText}>Product </Text>
              </View>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  resizeMode: 'contain',
                }}
                source={require('../../assets/forward_faqs.png')}
              />
            </TouchableOpacity>
          ) : null}
          {faqTypeFees === true ? (
            <TouchableOpacity
              style={styles.categoriesCard}
              onPress={() => {
                setFaqTypeFees(false);
                setFaqTypeProduct(true);
                setFaqTypeSecurity(true);
                setFaqTypeGeneral(true);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    marginRight: 10,
                  }}
                  source={require('../../assets/fees.png')}
                />
                <Text style={styles.midText}>Fees and Charges </Text>
              </View>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  resizeMode: 'contain',
                }}
                source={require('../../assets/forward_faqs.png')}
              />
            </TouchableOpacity>
          ) : null}
              <TouchableOpacity
              onPress={() => props.navigation.navigate('Report')}
              style={[styles.categoriesCard, styles.margin]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    marginRight: 10,
                  }}
                  source={require('../../assets/fees.png')}
                />
                <Text style={styles.midText}>Report an issue </Text>
              </View>
              <Image
                style={{
                  width: 10,
                  height: 10,
                  resizeMode: 'contain',
                }}
                source={require('../../assets/forward_faqs.png')}
              />
            </TouchableOpacity>
           </ScrollView> 
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  smallTitle: {
    fontSize: 13,
    fontWeight: 'normal',
    color: 'black',
    lineHeight: 20,
    marginBottom: 15,
  },
  midText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  emojiBody: {
    width: width * 0.3,
    height: height / 28,
    borderRadius: 8,
    backgroundColor: 'rgba(244, 245, 247, 1)',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  margin: {
    marginBottom: 0,
  },
  smalltext: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'black',
  },
  infoHelpful: {
    width: width * 0.9,
    height: height / 12,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  categoriesCard: {
    width: width * 0.9,
    height: height / 14,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Home;
