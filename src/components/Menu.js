import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Text,
  Image,
  Button
} from 'react-native'
import data from './rules'

const window = Dimensions.get('window')

export default class Menu extends Component {
  constructor(props){
    super(props)
  this.state = {
    dataSource: []
  }
  }
  componentDidMount() {
    const ds = data.rules 
    this.setState({
      dataSource: ds
    })
    console.log(this.props)
    
  }

  _keyExtractor = (item) => {
    return item.id
  }

  renderData = (data) => {
    const { container } = styles
    return (
      <TouchableOpacity onPress={ () => this.props.onItemSelected(data.item)}>
        <View style={container}>
          <Text style={styles.item} numberOfLines={1} ellipsizeMode='tail'>{data.item.name}</Text>        
          </View>
      </TouchableOpacity>
    )
  }

  render() {

    return (
      <><View style={styles.menu}>
        <Image key={'key1'} source={require('../.././assets/shiva.png')} style={styles.leftAvatar}/>
        <Text style={styles.title}>{data.leftPanel.panchakshara}</Text>
        <Text style={styles.title1}>{data.leftPanel.parividiTitle}</Text>
        
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderData}
          keyExtractor={this._keyExtractor}
          style={styles.listView}
          extraData={this.state}
        />
      </View>
      
      <TouchableOpacity onPress={() => {this.props.navigation.navigate('Photos') }}>
          <View>
          <Text style={styles.title2} >{data.gallery.name}</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 35
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    marginTop: 30,
    padding: 20
  },
  item: {    
    fontSize: 14,
    fontWeight: '300',
    flex: -1,
    paddingTop: 5,
    color:'blue',
    textDecorationLine: 'underline'
  },
  leftAvatar:{
    top:-50,
    height:"9%",
    width:'80%',
    left:-20   
  },
  title:{
    textAlign:'center',
    fontSize:24,
    fontWeight:'bold',
    color:'red',
    left:-50,
    top:-50,
    },
    title1:{
    textAlign:'left',
    fontSize:16,
    fontWeight:'bold',
    left:-10,
    top:-30,
    bottom:-50
    },
    title2:{
      textAlign:'left',
      fontSize:16,
      fontWeight:'bold',
      left:20,
      bottom: 10,
      color:'blue',
      textDecorationLine: 'underline'
  
      }
})

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired
}
