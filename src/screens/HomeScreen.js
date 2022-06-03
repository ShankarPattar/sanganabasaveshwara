import React from 'react';
import { Platform,Text, StyleSheet,View,Image,Dimensions,TouchableOpacity } from 'react-native';
import data from '../components/rules'
import ExecuteOnlyOnAndroid from '../common/CloseApp'

const HomeScreen = (props) => {
  return  (
  <TouchableOpacity onPress={()=> props.navigation.navigate('App')}>
    <View >
      <Image style={styles.image} source={data.homeScreen.image }/>
      <Text style={styles.title} >{data.homeScreen.title}</Text>
  </View>
  { Platform.OS !== 'ios' ? (
      <ExecuteOnlyOnAndroid message={'ಆಪ್ ಕ್ಲೋಸ್ ಮಾಡಲು 2 ಸಲ ಬ್ಯಾಕ್ ಬಟನ್ ಒತ್ತಿ.'} />
  ) : (
    <></>)}
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    image:{
    width:(Dimensions.get('window').width-10),
    height:(Dimensions.get('window').height-90),
    borderWidth:3,
    borderColor:'#d35647',
    resizeMode:'contain',
    margin:4,
  },
  title:{
    position:'relative',
    top: 5,
    bottom:5,
    fontSize: 14,
    color:'blue',
    textAlign:"center"
    
  } 
});

export default HomeScreen;
