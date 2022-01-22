import React, { Component } from 'react';
import {
    Text,
    View ,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image,
    Alert,
    
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';
import styles from "../style/Signupstyle";
import HeaderThreeButton from "../components/HeaderThreeButton";
import MaterialButton from "../components/MaterialButton";
import MaterialInput from "../components/MaterialInput";
// import MaterialSnackbar from "../components/MaterialSnackbar";

class SignUpApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelid:"1",
            room:"203",
            Languageapidata:[],
            LanguageId:"1",
            Confirmpassword:"",
            Password:"",
            Email:"",
            Lastname:"",
            Firstname:"",
            signupapidata:[],
            }
         }

    navPress= () => {
        // Alert.alert("Goback press")
        this.props.navigation.goBack()
         }

         Signup = () => {
            if(this.state.Firstname == ""){
             alert("Please Enter Firstname")
              }
            else{
              if(this.state.Lastname==""){
              alert("Please Enter Lastname")
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
                        if(this.state.Password==this.state.Confirmpassword){
                            // alert("correct")
                             this.api()
                            // this.props.navigation.navigate('Background')
                        }
                            else{
                                if(this.state.Confirmpassword){
                                    alert("Password Don't Match")
                                }
                                else{
                                    if(this.state.Confirmpassword==""){
                                        alert("Please Enter Confirm Password")
                                    }
                                    else{
                                        alert("Success")
                                        
                                    }
                                }
                                
                            }
                        }
                     }
                 }
             }
          }
         api =()=>{
            var myHeaders = new Headers();
            myHeaders.append("Cookie", "ci_session=6813c1ndq85n2cvvcilf1q4f4ur6e5j4");
            
            var formdata = new FormData();
            formdata.append("hotelid", this.state.hotelid);
            // formdata.append("username", this.state.Email);
            formdata.append("email", this.state.Email);
            formdata.append("password", this.state.Password);
            formdata.append("fname", this.state.Firstname);
            formdata.append("lname", this.state.Lastname);
            formdata.append("roomid", this.state.room);
            formdata.append("languageid", this.state.LanguageId);
            // formdata.append("city", "");
            // formdata.append("state", "");
            // formdata.append("pincode", "");
            // formdata.append("status", "");
            // formdata.append("createdate", "");
            // formdata.append("updatecode", "");
            
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: formdata,
              redirect: 'follow'
            };
            
            fetch("http://managecontour.crazymonkey.tech/index.php/api/customers/add", requestOptions)
              .then(response => response.json())
              .then(Text => {
                  console.log(Text)
                console.log(Text.data.customers.id)
                // console.log(Text.data.customers.address)
                console.log(Text.data.customers.token)
                // this.setState({signupapidata:Text.data.customers});
                // console.log(Text.data)
                // console.log(Text.data.customers.Email)

                
                console.log(Text.status)
                if(Text.status==200){
                    // Alert.alert("yes")

                    AsyncStorage.setItem('@Login_key','1')
                        try {
                         AsyncStorage.setItem('@User_key',JSON.stringify(Text.data.customers))
                        } catch (error) {
                          // saving error
                          console.log("saving data error")
                        }
                        try {
                            AsyncStorage.setItem('@Userid_key',Text.data.customers.id)
                           } catch (error) {
                             // saving error
                             console.log("saving data error")
                           }
                           try {
                            AsyncStorage.setItem("LanguageId_key",this.state.LanguageId)
                           } catch (error) {
                             // saving error
                             console.log("saving data error")
                           }
                           try {
                            AsyncStorage.setItem("token_key",Text.data.customers.token)
                           } catch (error) {
                             // saving error
                             console.log("saving data error")
                           }
                      
                //    this.props.navigation.navigate("Menuside")
                    // this.props.navigation.navigate('Index',{
                        // token:Text.data.customers.token,
                        // apidata:this.state.signupapidata,
                        // LanguageId:this.state.LanguageId,
                        // })
                }
               
            })
              .catch(error => console.log('error', error));

         }
        
        componentDidMount(){
            // AsyncStorage.clear()
            // var item = this.props.route.params.data
            // console.log(item)
            // var arr = item.split(",")
            // var arr1 = arr[0].split(":")
            // var arr2 = arr[1].split(":")
            // var hotelid = arr1[1]
            // var room = arr2[1]
            // this.setState({hotelid:hotelid})
            // this.setState({room:room})
            console.log("room")
            var myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=6813c1ndq85n2cvvcilf1q4f4ur6e5j4");

        var formdata = new FormData();
        formdata.append("token", "");
        

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("http://managecontour.crazymonkey.tech/index.php/api/language/get_all", requestOptions)
          .then(response => response.json())
          .then(json => {
                // console.log(json)
                // console.log(json.data)
                // console.log(json.data[1].ImagePath)
                // console.log(json.data[1].LanguageId)
                // console.log(json.data[1].LangDescription)
                this.setState({LanguageId:json.data[1].LanguageId});
                 this.setState({Languageapidata:json.data});
                  // console.log(jsons.data.results)
                  // console.log(jsons.message)

                 })

          .catch(error => console.log('error', error));
        }
        

        

  render() {
    
    return (
        <SafeAreaView >
            
      
        <ScrollView style={{backgroundColor: 'lightgrey'}}>
             <View style={{flex: 1, backgroundColor: 'lightgrey',}}>
             
            <HeaderThreeButton
                title='Sign Up'
                isGallery={false}
                isenableMore={false}
                navPress={() => this.navPress()}
                // searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                // morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff7900'
            />
            <View style={{flex: 1, justifyContent: 'space-around'}}>
                <View style={{alignSelf: 'center', justifyContent: 'center'}}>
                    <View style={{
                        width: 86,
                        height: 86,
                        marginTop: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'black',
                        borderRadius: 50,
                    }}>
                        <Image source={require('../assets/icon/ic_diamond.png')}
                               style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:10,height:44,backgroundColor:"white",
                        marginHorizontal:10,alignItems:"center"}}>
                        <Text>Hotel Id:{this.state.hotelid}</Text>
                        <Text>Room-No:{this.state.room}</Text>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <MaterialInput bgColor='white' placeholder='Firstname'
                    onChangeText={(Firstname)=>this.setState({Firstname})}
                    value={this.state.Firstname} 
                    />
                    <MaterialInput bgColor='white' placeholder='Lastname'
                     onChangeText={(Lastname)=>this.setState({Lastname})}
                     value={this.state.Lastname}
                    />
                    <MaterialInput bgColor='white' placeholder='Email' type='email-address'
                     onChangeText={(Email)=>this.setState({Email})}
                     value={this.state.Email}
                    />
                    <MaterialInput bgColor='white' placeholder='Password' isPassword={true}
                     onChangeText={(Password)=>this.setState({Password})}
                     value={this.state.Password}
                    />
                    <MaterialInput bgColor='white' placeholder='Confirm Password' isPassword={true}
                     onChangeText={(Confirmpassword)=>this.setState({Confirmpassword})}
                     value={this.state.Confirmpassword}
                    />
                    <View style={styles.picker}>
                        <Picker
                                selectedValue={this.state.LanguageId}
                                
                                onValueChange={(itemValue, itemIndex) =>
                                this.setState({LanguageId:itemValue})}>
                        
                                {this.state.Languageapidata.map((item, index) => {
                                return (< Picker.Item label={item.LangDescription} value={item.LanguageId} key={item.LanguageId} />);
                                })} 
                                {/* <Picker.Item label="English" value="English" />
                                <Picker.Item label="Spanish" value="Spanish" />
                                <Picker.Item label="French" value="French" /> */}
                        </Picker>
                  </View>
                    <MaterialButton title='Create An Account'
                                    style={{backgroundColor: '#ff7900', marginTop: 25}}
                                    buttonPress={() => this.Signup()}
                                    />
                    {/* <TouchableOpacity style={{
                        flexDirection: 'row',
                        height: 44,
                        marginVertical: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} 
                    onPress={() => snackbarRef.current.ShowSnackBarFunction('login clicked')}
                    >
                        <Text style={{fontSize: 14, textAlign: 'center'}}>
                            <Text>Already have account?</Text>
                            <Text style={{fontWeight: 'bold'}}> Sign In</Text>
                        </Text>
                    </TouchableOpacity> */}
                </View>
            </View>
            {/* <MaterialSnackbar ref={snackbarRef}/> */}
            
        </View>
        </ScrollView>
         
     </SafeAreaView>
    );
  }
}
export default SignUpApp;            