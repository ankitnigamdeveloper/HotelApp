import React, { Component } from 'react';
import {
    Text,
    View ,
    SafeAreaView,
    TextInput,ScrollView,
    TouchableOpacity,
    Image,

} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../style/Editprofilestyle";
// import { TextField } from 'react-native-materialui-textfield';

class SignUpApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Fname:"",
            Lastname:"",
            Username:"",
            Email:"",
            Mobile:"",
            Address:"",
            City:"",
            State:"",
            Pincode:"",
            Password:"",
            ConfirmPassword:"",
            id:"",
            Profileapidata:"",
            arrayasync:[],
            
            
            }
        }
        Back= () => {
            this.props.navigation.goBack()
             }
        SAVE = () => {
            if(this.state.Username == ""){
             alert("Please Enter Username")
              }
            else{
              if(this.state.Email==""){
              alert("Please Enter Email")
              }
              else{
                  if(this.state.Password==""){
                 alert("Please Enter Password")
                 }
                 else{
                    if(this.state.Password==this.state.ConfirmPassword){
                        // alert("correct")
                        this.Profileapi()
                    }
                    else{
                        if(this.state.ConfirmPassword){
                            alert("Password Don't match")}
                            else{
                                if(this.state.ConfirmPassword==""){
                                    alert("Please Enter Confirm Password")
                                }
                                else{
                                    // this.props.navigation.navigate('Language')
                                }
                            }
                        }
                     }
                 }
             }
             
          }
          
          componentDidMount() {
            AsyncStorage.getItem("@Userid_key")
            // .then(req => JSON.parse(req))
              .then(value => {
                console.log(value)
                 this.setState({id:value});
                
              })
    
    
    AsyncStorage.getItem("@User_key")
    .then(req => JSON.parse(req))
      .then(value => {
        // console.log(value)

        this.setState({arrayasync:value,
            Email:value.email,
            Fname:value.fname,
            Lastname:value.lname,
            Mobile:value.mob,
            Address:value.address,
            City:value.city,
            Pincode:value.pincode,
            // Password:value.password,
            State:value.state,
            Username:value.username,
            Id:value.id,});

        // this.setState({Email:value.email});
        // this.setState({Fname:value.fname});
        // this.setState({Lastname:value.lname});
        // this.setState({Mobile:value.mob});
        // this.setState({Address:value.address});
        // this.setState({City:value.city});
        // this.setState({Pincode:value.pincode});
        // this.setState({Password:value.password});
        // this.setState({State:value.state});
        // this.setState({Username:value.username});
        // this.setState({Id:value.id});
        
        // console.log(value.username)
        // console.log(value.password)
        // console.log(value.address)

        
      })
      


    }
    Profileapi =()=>{
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "ci_session=6813c1ndq85n2cvvcilf1q4f4ur6e5j4");
        
        var formdata = new FormData();
        formdata.append("username", this.state.Username);
        formdata.append("email", this.state.Email);
        formdata.append("password", this.state.Password);
        formdata.append("fname", this.state.Fname);
        formdata.append("lname", this.state.Lastname);
        formdata.append("mob", this.state.Mobile);
        formdata.append("address", this.state.Address);
        formdata.append("city", this.state.Address);
        formdata.append("state", this.state.State);
        formdata.append("pincode", this.state.Pincode);
        formdata.append("status", "");
        formdata.append("createdate", "");
        formdata.append("updatecode", "");
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        console.log(this.state.id)
        var id =
        fetch("http://managecontour.crazymonkey.tech/index.php/api/customers/edit/"+parseInt(this.state.id), requestOptions)
          .then(response => response.json())
          .then(Text => {
              console.log(Text)
            // console.log(Text.data)
            // console.log(Text.message)
            // console.log(Text.param)
            console.log(Text.param.username)
            console.log(Text.param.mob)
            this.setState({Profileapidata:Text.param});
        
        

            
            console.log(Text.status)
            if(Text.status==200){
                // Alert.alert("yes")

                AsyncStorage.setItem('@Login_key','1')

                    try {
                     AsyncStorage.setItem('@User_key',JSON.stringify(Text.param))
                    } catch (error) {
                      // saving error
                      console.log("saving data error")
                    }
                  
               
                this.props.navigation.goBack()
            }
            //   this.setState({ postdata: json.data.results });
              // console.log(jsons.data.results)
              // console.log(jsons.message)
        })
          .catch(error => console.log('error', error));

     }



    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={styles.mainview}>
                    <ScrollView  showsVerticalScrollIndicator={false}>
                    <View style={{flexDirection:"row",alignItems:"center",flex:1,marginRight:0}}>
                        <TouchableOpacity
                          style={styles.button1}
                          onPress={this.Back}>
                          <Image style={styles.Images} source={require('../images/lefterrow.png')}></Image>
                            </TouchableOpacity>
                            <Text style={styles.text}>Update your Profile</Text>
                        </View>
                        
                        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,}}>
                        <TextInput
                            style={styles.textinput1}
                            onChangeText={(Fname)=>this.setState({Fname})}
                                value={this.state.Fname}
                            placeholder= "First name"
                            keyboardType="name-phone-pad"
                            // returnKeyLabel="ok"
                            returnKeyType="done"
                            // secureTextEntry
                            // placeholderTextColor= "blue"
                            /> 
                            <TextInput
                            style={styles.textinput1}
                            onChangeText={(Lastname)=>this.setState({Lastname})}
                                value={this.state.Lastname}
                            placeholder= "Last name"
                            keyboardType="name-phone-pad"
                            // returnKeyLabel="ok"
                            returnKeyType="done"
                            // secureTextEntry
                            // placeholderTextColor= "blue"
                            />
                        </View>
                        <View>
                            <TextInput
                            style={styles.textinput2}
                            onChangeText={(Username)=>this.setState({Username})}
                                value={this.state.Username}
                            placeholder= "Username"
                            keyboardType="name-phone-pad"
                            // returnKeyLabel="ok"
                            returnKeyType="done"
                            // secureTextEntry
                            // placeholderTextColor= "blue"
                            /> 
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
                            <TextInput
                            style={styles.textinput2}
                            onChangeText={(Mobile)=>this.setState({Mobile})}
                                value={this.state.Mobile}
                            placeholder= "Mobile"
                            keyboardType="phone-pad"
                            // returnKeyLabel="ok"
                            returnKeyType="done"
                            // secureTextEntry
                            // placeholderTextColor= "blue"
                            /> 
                            <TextInput
                            style={styles.textinput2}
                            onChangeText={(Address)=>this.setState({Address})}
                                value={this.state.Address}
                            placeholder= "Address"
                            keyboardType="name-phone-pad"
                            // returnKeyLabel="ok"
                            returnKeyType="done"
                            // secureTextEntry
                            // placeholderTextColor= "blue"
                            /> 
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:8,}}>
                        <TextInput
                            style={styles.textinput1}
                            onChangeText={(City)=>this.setState({City})}
                                value={this.state.City}
                            placeholder= "City"
                            keyboardType="name-phone-pad"
                            // returnKeyLabel="ok"
                            returnKeyType="done"
                            // secureTextEntry
                            // placeholderTextColor= "blue"
                            /> 
                            <TextInput
                            style={styles.textinput1}
                            onChangeText={(State)=>this.setState({State})}
                                value={this.state.State}
                            placeholder= "State"
                            keyboardType="name-phone-pad"
                            // returnKeyLabel="ok"
                            returnKeyType="done"
                            // secureTextEntry
                            // placeholderTextColor= "blue"
                            />
                        </View>
                        <View>
                            <TextInput
                            style={styles.textinput2}
                            onChangeText={(Pincode)=>this.setState({Pincode})}
                                value={this.state.Pincode}
                            placeholder= "PIN Code"
                            keyboardType="phone-pad"
                            // returnKeyLabel="ok"
                            returnKeyType="done"
                            // secureTextEntry
                            // placeholderTextColor= "blue"
                            /> 
                            
                            <TextInput
                            style={styles.textinput2}
                            onChangeText={(Password)=>this.setState({Password})}
                                value={this.state.Password}
                            placeholder= "Password"
                            // keyboardType="name-phone-pad"
                            // returnKeyLabel="ok"
                            returnKeyType="done"
                            secureTextEntry
                            // placeholderTextColor= "blue"
                            />
                            <TextInput
                            style={styles.textinput2}
                            onChangeText={(ConfirmPassword)=>this.setState({ConfirmPassword})}
                                value={this.state.ConfirmPassword}
                            placeholder= "Confirm Password"
                            // keyboardType="name-phone-pad"
                            // returnKeyLabel="ok"
                            returnKeyType="done"
                            secureTextEntry
                            // placeholderTextColor= "blue"
                            />  
                            
                        </View>
                        <TouchableOpacity
                            style={styles.logbutton}
                            onPress={this.SAVE}>
                            <Text style={{color:"white",fontWeight:"bold"}}>SAVE</Text>
                        </TouchableOpacity>
                        
                    </ScrollView>
                </View>
            </SafeAreaView>
            );
          }
        }
export default SignUpApp;            