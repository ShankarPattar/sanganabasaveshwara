import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  Image,
  View,
  Dimensions,
LogBox
} from 'react-native'
import SideMenu from 'react-native-side-menu'

import Menu from '../components/Menu'
import { 
  Header 
} from '../common'
 import data from '../components/rules'


export default class MainComp extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isOpen: false,
      selectedItem: { 
        name:data.rules[0].name,
        bio: data.rules[0].bio,
        sloka :data.rules[0].sloka,
        image:data.rules[0].image,
        id:data.rules[0].id,
        images:data.rules[0].images,
        imageTitle:data.rules[0].imageTitle
      }
    }
  }
  
  onMenuItemSelected = item =>{

    this.setState({
      isOpen: false,
      selectedItem: item
    })}
 

  updateMenuState = isOpen => {
    this.setState({ isOpen })
    this.myRef.current.scrollTo({x:5,y:5,animated:true});
  }
  
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  _keyExtractor = (item) => {
    return item.id
  }

  getItems=()=>{
    return this.state.selectedItem.sloka.map((item,index)=>{
      return <Text key={index} style = {styles.sloka}>{item}</Text>
    })
  }

  componentDidMount() {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
}

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} navigation={this.props.navigation}/>
     
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <Header 
          title={this.state.selectedItem.name}
          leftButton
          leftIcon='md-menu'
          colorLeft='black'
          rightButton
          rightIcon='md-add'
          colorRight='gold'
          onPress={this.toggle}
        />

        <ScrollView style={styles.container} ref={this.myRef}>        
          {this.state.selectedItem.image && <View key={this.state.selectedItem.id}>
            <Image  source={this.state.selectedItem.image} style={styles.titleImage}/>
            <Text  style = {styles.title}>{this.state.selectedItem.imageTitle}</Text>
          </View>}
          {this.state.selectedItem.sloka &&          
         this.getItems()
        }
          <TextInput 
            multiline
            autogrow
            editable={false}
            style={styles.instructions}
            value={this.state.selectedItem.bio}
          />
          <View style={styles.imagelist}>
          {this.state.selectedItem.images && this.state.selectedItem.images.map((image, i) => {
           return (
             <View
              key={image.id}
             >
              <Image style={styles.image} source={image.image }/>
              <Text style={styles.title} key={i}>{image.title}</Text>
             </View>
           );
         })}
         </View>
         
          <Image key={'key1'} source={require('../.././assets/footer.jpeg')} style={styles.footer}/>
          
       </ScrollView>       

      </SideMenu>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  button: {
    position: 'absolute',
    top: 20,
    padding: 10
  },
  instructions: {
    color: '#333333',
    paddingTop: 30,
    padding: 20,
    marginBottom: 5,
    fontSize: 20,
    
  },
  sloka:{
    position: 'relative',
    top: 10,
    padding: 10,
    fontSize: 22,
    color:'red',
    textAlign:'center',
    bottom: 10,
  },
  image:{
    width:(Dimensions.get('window').width/2.5),
    height:(Dimensions.get('window').height/4),
    borderWidth:2,
    borderColor:'#d35647',
    resizeMode:'contain',
    margin:4,
    textAlign:"center"
  },
  titleImage:{
    width:(Dimensions.get('window').width/2.5),
    height:(Dimensions.get('window').height/4),
    left:(Dimensions.get('window').width/3.6), 
    top:10   
  },
  imagelist:{
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',    
    margin:2,
    flexDirection:'row',
    flex:1     
  },
  footer:{
    width:'100%',
    height:40,
    left:0,
    right:0,
    resizeMode:'contain',
   flex:1,
   alignSelf: 'stretch'
  },
  title:{
    position:'relative',
    top: 5,
    padding: 5,
    fontSize: 12,
    color:'blue',
    textAlign:"center"
  }
})

