import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Settings } from 'react-native';
import Setting from "../src/setting"
import Editprofile from "../src/Editprofile"
import Termsandconditions from "./Termsandconditions"

// import Forgotpassword from "./src/Forgotpassword"

const Stack = createNativeStackNavigator();

export default class App extends React.Component{
  render(){
    return (
      
      <NavigationContainer independent={true}>
       <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName={Setting}>
         
       
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Editprofile" component={Editprofile}/>
        <Stack.Screen name="Termsandconditions" component={Termsandconditions}/>
     

         
        </Stack.Navigator>
      </NavigationContainer>
  );
}
}