import React, { Component } from 'react';
import {
    Text,
    View ,
    TouchableOpacity,
    TextInput,
    Alert,
    Image,
    ScrollView
} from 'react-native'
import styles from "../style/Forgotpasswordstyle";

class SignUpApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email:"",
        }
    }
    login= () => {
        this.props.navigation.navigate('Login')
         }
    Signup = () => {
        if(this.state.Email == ""){
         alert("Please Enter your Email")
          }
        }
    render() {
        return (
            <View style={styles.mainview}>
                <ScrollView  showsVerticalScrollIndicator={false}>
                    <View style={{ marginTop:0, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                        style={styles.DBmages}
                         source={require('../images/DB1.jpg')}></Image> 
                    </View>
                    <Text style={styles.text}>Please Enter Email for forgot your </Text>
                    <Text style={styles.text1}>password </Text>
                    <TextInput
                        style={styles.textinput2}
                        onChangeText={(Email)=>this.setState({Email})}
                        value={this.state.Email}
                        placeholder= "Email"
                        keyboardType="email-address"
                        // returnKeyLabel="ok"
                        returnKeyType="done"
                        // secureTextEntry
                        // placeholderTextColor= "blue"
                    /> 
                    <TouchableOpacity
                        style={styles.logbutton}
                        onPress={this.Signup}>
                        <Text style={{color:"white",fontWeight:"bold"}}>Send Code</Text>
                    </TouchableOpacity>
                    <View
                        style={{flexDirection:"row",justifyContent:"center",marginTop:6,}}>
                        <Text style={{fontSize:14,textAlign:"center",}}>Do you have a Password?</Text>
                       <TouchableOpacity
                        style={styles.logbutton1}
                        onPress={this.login} >
                        <Text style={{color:"purple",fontWeight:"bold"}}> Log In</Text>
                       </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            );
          }
        }
export default SignUpApp;            