import React, { Component, useRef} from 'react';
import {
    Text,
    TouchableOpacity,
    View ,
    ImageBackground,
    Image,
    Alert,
    StyleSheet,
    SafeAreaView,
    StatusBar
    
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
 class BackgroundApp extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Token:"",
            BackgroundImg:"",
            LogoImg:"",
        }
    }
    componentDidMount(){

        AsyncStorage.getItem("LanguageId_key")
        // .then(req => JSON.parse(req))
          .then(value => {
            console.log(value)
            //  this.setState({id:value});
            
          })
            
          AsyncStorage.getItem("token_key")
          // .then(req => JSON.parse(req))
            .then(value => {
              console.log(value)
               this.setState({Token:value});
            })

            AsyncStorage.getItem("@User_key")
            .then(req => JSON.parse(req))
              .then(user => {
                // console.log(value)
                //  this.setState({id:value});
              
        var myHeaders = new Headers();
myHeaders.append("Cookie", "ci_session=59508n97e3jaam6m8lkh6m6naiko1dvk");

var formdata = new FormData();
// formdata.append("token", "13138cfd8b9e247558432ba5cd5968a8");
formdata.append("hotelid", user.hotelid);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("http://managecontour.crazymonkey.tech/index.php/api/Hotel/get_hotel", requestOptions)
  .then(response => response.json())
  .then(Result => { 
      console.log(Result.status)
      console.log(Result.message)
      this.setState({BackgroundImg:Result.data[0].BackgroundImg});
      this.setState({LogoImg:Result.data[0].LogoImg});
    })
  .catch(error => console.log('error', error));
  })
    }   
    render() {
      const { navPress } = this.props;
        return (
          <SafeAreaView style={{flex:1}}>
           <StatusBar/>
            <View style={styles.mainview}>

              <ImageBackground style={styles.Backgroundimage} source={{uri:(this.state.BackgroundImg)}}>
                  <TouchableOpacity
                      style={styles.logbutton}
                      onPress={navPress}
                      >
                      <Image style={styles.Menu} source={require('./../../images/menu.png')}></Image>    
                  </TouchableOpacity>
                  <View style={{ height:100, marginTop:0, alignSelf:"center", width:200}} 
                  >
                    
                    <Image style={styles.Image} source={{uri:(this.state.LogoImg)}} ></Image>
                    </View>
              </ImageBackground>
            </View>
            </SafeAreaView>
            );
          }
        }

      const styles =  StyleSheet.create({
          
          mainview:{
            backgroundColor:"white",
            height:"100%",
            width:"100%"
            },
            Backgroundimage:{
              // paddingTop: - StatusBar.currentHeight,
              resizeMode:"cover",
              width:"100%",
              height:"100%",
            },
            Image:{
                height:100,
                width:200,
                resizeMode:"contain",
                alignSelf:"center",
                borderRadius: 15,
                // marginTop:60,
            },
            logbutton:{
              height:50,
              width:50,
              marginTop:15,
              marginLeft:20,
             },
              Menu:{
                  height:25,
                  width:25,
                  resizeMode:"contain",
              },
          })
export default BackgroundApp;            