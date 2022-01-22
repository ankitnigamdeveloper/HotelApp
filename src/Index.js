import React, { Component } from 'react';
import {
    Text,
    View ,
} from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
class SignUpApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    async componentDidMount(){
      const { status } = await  BarCodeScanner.requestPermissionsAsync();
            this.setState({hasPermission :status === 'granted'})
            if(status === 'granted'){
            this.props.navigation.navigate("Barcode")
            }
    console.log(status)
    }
      
    render() {
      return (
        <View style = {{marginTop: 50}}>
          <Text style = {{textAlign: "center"}}>{this.state.hasPermission == undefined? "Please Wait":"Please give perision for camera"}</Text>
        </View>
      );
    }
  }
export default SignUpApp;
        