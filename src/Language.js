import React, { Component } from 'react';
import {
    Text,
    View ,
    TouchableOpacity,
    Image,
    ScrollView,
    
} from 'react-native'
import styles from "../style/Languagestyle";
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

class SignUpApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Language:"1",
            getValue:"",
            signuptoken:"",
            apidata:[],
            Array:[
            // { label:"1",value:"govind",id:"5",},
            // { label:"2",value:"singh",id:"6",},
            // { label:"3",value:"parihar",id:"7",},
            // { label:"4",value:"kundla",id:"8",},
            // { label:"5",value:"bujurg",id:"9",},
           ],
        }
    }
    componentDidMount(){
      const  apidata = this.props.route.params.apidata
      const  token = this.props.route.params.token
      this.setState({signuptoken:token})
      this.setState({signupapidata:apidata})
      console.log(token)
      console.log(apidata)


     


      var myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=6813c1ndq85n2cvvcilf1q4f4ur6e5j4");

        var formdata = new FormData();
        formdata.append("token", this.state.signuptoken);
        

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("http://managecontour.crazymonkey.tech/index.php/api/language/get_all", requestOptions)
          .then(response => response.json())
          .then(json => {
                console.log(json)
                // console.log(json.data)
                // console.log(json.data[1].ImagePath)
                // console.log(json.data[1].LanguageId)
                // console.log(json.data[1].LangDescription)

                 this.setState({apidata:json.data});
                  // console.log(jsons.data.results)
                  // console.log(jsons.message)

                 })

          .catch(error => console.log('error', error));
    }
    Homepage= () => {
      AsyncStorage.getItem('@Login_key').then(value=>this.setState({ getValue:value }))
      this.props.navigation.navigate('Home',{Language:this.state.Language})
       }


      //  getData = async () => {
      //   try {
      //     const value = await AsyncStorage.getItem('@Login_key').then(value=>this.setState({ getValue:value }))
      //     if(value !== null) {
      //       // value previously stored
      //       alert(value);
      //     }
      //   } catch(error) {
      //     // error reading value
      //     console.log("read data error")
          
      //   }
      // }
       
    
    render() {
    
        return (
            <View style={styles.mainview}>
                <View >
                        <Image
                        style={styles.DBmages}
                         source={require('../images/DB1.jpg')}></Image> 
                    <Text style={styles.text}>Select your Language </Text>
                    <View style={styles.picker}>
                     <Picker
                            selectedValue={this.state.Language}
                            // style={styles.picker}
                            onValueChange={(itemValue, itemIndex) =>
                            this.setState({Language:itemValue})}>
                              {/* style={{your_style}} */}
                               {this.state.apidata.map((item, index) => {
                              return (< Picker.Item label={item.LangDescription} value={item.LanguageId} key={item.LanguageId} />);
                              })} 
                           {/* <Picker.Item label="English" value="English" />
                            <Picker.Item label="Spanish" value="Spanish" />
                            <Picker.Item label="French" value="French" /> */}
                    </Picker>
                  </View>
                </View>
                <View>
                    <View>
                      <TouchableOpacity
                        style={styles.logbutton}
                        onPress={this.Homepage}>
                        <Text style={{color:"white",fontWeight:"bold"}}>Next</Text>
                      </TouchableOpacity>
                   </View>
                </View>
            </View>
            );
          }
        }
export default SignUpApp;            