import React, { Component } from 'react';
import {
    Text,
    View ,
    TouchableOpacity,
    Alert,
} from 'react-native'
import styles from "../style/settingstyle";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


class SignUpApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }
      profile= () => {
        //   Alert.alert("hi")
        this.props.navigation.navigate('Editprofile')
     }
     Terms= () => {
        this.props.navigation.navigate('Termsandconditions')
     }
     Language= () => {
        Alert.alert("Language")
     }
     Logout= () => {
        // this.props.navigation.goBack()
        AsyncStorage.clear()
         }
     
     
    render() {
        return (
            // <SafeAreaView>
                <View style={styles.mainview}>

                    <TouchableOpacity>
                        <Text style={styles.text1}>SETTING</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.profile}>
                        <Text style={styles.text}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.Terms}>
                            <Text style={styles.text}>Terms and Conditions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.text}>Change Language</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={this.Logout}>
                    <Text style={styles.text}>Log Out</Text>
                    </TouchableOpacity>
            

            </View>
            // </SafeAreaView>
            );
          }
        }
export default SignUpApp;            