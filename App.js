import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Activities from "./src/Activity/Activities"
import ActivityMenu from "./src/Activity/ActivityMenu"
import ActivityDetailMenu from "./src/Activity/ActivityDetailMenu"
import Barcode from "./src/Barcode"
import Gallery from "./src/Gallery"
import Homes from "./src/HotelInfo/Homes"
import Signup from "./src/Signup"
import LanguageSelectionScreen from './src/LanguageSelectionScreen';
import Menuside from './src/Menuside';
import Detailsactivity from './src/Activity/Detailsactivity';
import Restaurants from './src/Restorant/Restaurants';
import Index from './src/Index';
import Hotelinfo from './src/HotelInfo/Hotelinfo'
import Hotelinfodescription from './src/HotelInfo/Hotelinfodescription'
import HotelinfodescriptionM from './src/HotelInfo/Hotelinfodes'
import Restaurantscategory from './src/Restorant/Restaurantscategory'
import Restaurantscategorymenu from './src/Restorant/Restaurantscategorymenu'
import Rcatsidemenu from './src/Restorant/Rcatsidemenu'
import Rcatmenusidemenu from './src/Restorant/Rcatmenusidemenu'
import RoomCSideMenu from './src/RoomServise/RoomCSidemenu'
import RoomCheckout from './src/RoomServise/CheckOut'
import EventDesMenu from './src/Event/EventDesMenu'
import Success from './src/Activity/Success';
const Stack = createNativeStackNavigator();
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View,Text, Image} from 'react-native'
// import * as ScreenOrientation from 'expo-screen-orientation';
// ScreenOrientation.unlockAsync()
export const PageContext = React.createContext();
var aa = ""
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Islogin:"",
      isLoading:true,
      hasPermission:null
    }
  }
  async componentDidMount(){
   await AsyncStorage.getItem("@Login_key")
          .then(value => {
            this.setState({Islogin:value });
            this.setState({isLoading: false });
            // aa = value
            // console.log("aa")
          })
         const status =  BarCodeScanner.requestPermissionsAsync();
         this.setState({hasPermission :status === 'granted'})
          console.disableYellowBox = true;
  }
  render(){
     AsyncStorage.getItem("@Login_key")
    .then(value => {
      this.setState({Islogin:value });
      // this.setState({isLoading: false });
      // aa = value
      // console.log("aa")
    })
    // console.disableYellowBox = true;
    // AsyncStorage.clear()
    return (
!this.state.isLoading?(
      this.state.Islogin == "1" ? (
      
<PageContext.Provider>
      <NavigationContainer>
       <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName={"Menuside"}>
       <Stack.Screen name="Menuside" component={Menuside}/>
        <Stack.Screen name="Activities" component={Activities} />
        
        <Stack.Screen name="Gallery" component={Gallery}/>
        <Stack.Screen name="Homes" component={Homes}/>
       
        <Stack.Screen name="LanguageSelectionScreen" component={LanguageSelectionScreen}/>
        <Stack.Screen name="ActivityDetailMenu" component={ActivityDetailMenu}/>
        <Stack.Screen name="ActivityMenu" component={ActivityMenu}/>
        <Stack.Screen name="Detailsactivity" component={Detailsactivity}/>
        <Stack.Screen name="Restaurants" component={Restaurants}/>
        
        <Stack.Screen name="Hotelinfo" component={Hotelinfo}/>
        <Stack.Screen name="Hotelinfodescription" component={Hotelinfodescription}/>
        <Stack.Screen name="HotelinfodescriptionM" component={HotelinfodescriptionM}/>
        <Stack.Screen name="Restaurantscategory" component={Restaurantscategory}/>
        <Stack.Screen name="Restaurantscategorymenu" component={Restaurantscategorymenu}/>
        <Stack.Screen name="Rcatsidemenu" component={Rcatsidemenu}/>
        <Stack.Screen name="EventDesMenu" component={EventDesMenu}/>
        <Stack.Screen name="Rcatmenusidemenu" component={Rcatmenusidemenu}/>
        <Stack.Screen name="RoomCSideMenu" component={RoomCSideMenu}/>
        <Stack.Screen name="RoomCheckout" component={RoomCheckout}/>
        <Stack.Screen name="Success" component={Success}/>
       
        </Stack.Navigator>
      </NavigationContainer>
      </PageContext.Provider>
        )
        :(
        <PageContext.Provider>
          <NavigationContainer>
           <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Index" component={Index}/>
            <Stack.Screen name="Barcode" component={Barcode}/>
            <Stack.Screen name="Signup" component={Signup}/>
            
            </Stack.Navigator>
            </NavigationContainer>
            </PageContext.Provider>
            )
):(
            <View style={{flex:1}}>
              <Image source={require('./assets/splash.png')}/>
            </View>
)
  )
}
}