import React,{useState} from 'react';
import { Text, StyleSheet,FlatList,View,Image,Dimensions,TouchableOpacity,ScrollView } from 'react-native';
import ImageView from 'react-native-image-viewing';
import data from '../components/rules';

const PhotoGallery = () => {
    const [visible, setIsVisible] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

  return (<><Text style={styles.title} >{data.homeScreen.title}</Text>
 
  <FlatList 
            numColumns={2}
            showsVerticalScrollIndicator={true}
            data={data.imagess}
            key="index1"
            renderItem={ ({ item, index }) => (
      <TouchableOpacity onPress={()=>{setImageIndex(index);setIsVisible(true)}}>     
            <Image key={index} style={styles.image} source={item }/>
      </TouchableOpacity>
            )}
    />


<ImageView
  images={data.imagess}
  presentationStyle={'fullScreen'}
  imageIndex={imageIndex}
  visible={visible}
  animationType={'slide'}
  onRequestClose={() => setIsVisible(false)}
/></>)
 };

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF'   
  },
    image:{
    width:(Dimensions.get('window').width/3+60),
    height:(Dimensions.get('window').height/4),
    borderWidth:3,
    borderColor:'#d35647',
    resizeMode:'contain',
    margin:4,    
    position:'relative',
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

export default PhotoGallery;