import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MainComp from "./src/screens/MainComp";
import PhotoGallery from './src/screens/PhooGallery';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    App: MainComp,
    Photos:PhotoGallery
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {      
      title: "ಶ್ರೀ ಆರೂಢ ಸಂಗನಬಸವೇಶ್ವರ ಚರಿತ್ರೆ",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        textAlign:'center',
        fontWeight: 'bold',
        fontSize:22
      }
    },
  }
);

export default createAppContainer(navigator);
