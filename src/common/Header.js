import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text,Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = ({ 
  navigation, 
  colorLeft,
  leftButton, 
  leftIcon, 
  title, 
  colorRight,
  rightButton, 
  rightIcon, 
  screen,
  item,
  onPress,
  backButton
}) => {
  return (
    <View style={styles.container}>
      {leftButton === true &&
      <View>
        <TouchableOpacity onPress={onPress}>
          <Icon name={leftIcon} style={styles.leftButton} color={colorLeft} />
        </TouchableOpacity>
         </View>
      }
      {backButton === true &&
      <View>
      
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name={leftIcon} style={styles.leftButton} color={colorLeft} />
        </TouchableOpacity>
        </View>
      }
      
      <Text style={styles.title}>{title}</Text>
      {rightButton === true &&
       <View>

        <TouchableOpacity onPress={() => navigation.navigate(screen, (item))}>
          <Icon name={rightIcon} style={styles.rightButton} color={colorRight} />
        </TouchableOpacity>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 63,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    backgroundColor: 'gold',
    flexDirection: 'row',
    position: 'relative'
  },
  title: {
    flex: 1,
    color: 'black',
    paddingTop: 23,
   
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 18
  },
  leftAvatar: {
    height: 40,
    width: 40,
    marginTop: 20,
    marginLeft: 5 
  },
  leftButton: {
    paddingTop: 25,
    paddingLeft: 10,
    fontSize: 32
  },
  rightButton: {
    paddingTop: 24,
    paddingRight: 13,
    fontSize: 30
  }
})

export { Header }
