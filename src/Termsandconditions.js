import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View ,
    
    
    
} from 'react-native'
import styles from "../style/home1style";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';



class SignUpApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@storage_Key', "2")
        } catch (error) {
          // saving error
          console.log("saving data error")
        }
      };
       getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@storage_Key')
          if(value !== null) {
            // value previously stored
            alert(value);
            console.log(value)
          }
        } catch(error) {
          // error reading value
          console.log("read data error")
        }
      }

    
       
    
    
    render() {
        
        return (
            <View style={styles.mainview}>
                <TouchableOpacity style={{height:40,width:160,}} onPress={this.storeData}>
                    <Text style={{fontSize:22}}>
                        SAVING STRING
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:40,width:150}} onPress={this.getData}>
                    <Text style={{fontSize:22}}>
                        READ STRING
                    </Text>
                </TouchableOpacity>

            </View>
            
            );
          }
        }
export default SignUpApp;            