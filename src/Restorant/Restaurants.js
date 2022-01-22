import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View ,
    ImageBackground,
    Image,
    Alert,
    Dimensions,
    FlatList,
    ActivityIndicator
} from 'react-native'
// import styles from "../style/Backgroundstyle";
import AsyncStorage from '@react-native-async-storage/async-storage';

import HeaderThreeButton from "../../components/HeaderThreeButton";



class RestaurantsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Restaurantsapi:[],
            isLoading:true,
             DATA :[
                {id: '1', image: 'gallery_9_img_1.jpg', title: 'Urban Skyscrapers'},
                {id: '2', image: 'gallery_9_img_2.jpg', title: 'Citywalks'},
                {id: '3', image: 'gallery_9_img_3.jpg', title: 'Nature'},
                {id: '4', image: 'gallery_9_img_4.jpg', title: 'Mountain'},
            ]

        }
    }
    componentDidMount(){

        AsyncStorage.getItem("@User_key")
        .then(req => JSON.parse(req))
          .then(user => {
           AsyncStorage.getItem("LanguageId_key")
        // .then(req => JSON.parse(req))
          .then(langageId => {
            console.log(langageId)
            //  this.setState({Token:value});

        var myHeaders = new Headers();
        myHeaders.append("Cookie", "ci_session=9485selj41u9sbqnvt33n78fp685oob6");

        var formdata = new FormData();
        formdata.append("token", user.token);
        formdata.append("hotelid", user.hotelid);
        formdata.append("languageid", langageId);
        formdata.append("serviceType", "1");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        fetch("http://managecontour.crazymonkey.tech/index.php/api/Hotelrestaurantheader/get_all", requestOptions)
        .then(response => response.json())
        .then(result => {
            // console.log(result)
            console.log(result.data)
            if(result.status == 200){
            this.setState({Restaurantsapi:result.data});
            }
            this.setState({isLoading:false})
        })
        .catch(error => console.log('error', error));
        })
          })
    }
      
   
      
    render() {
        const { navPress } = this.props
        return (
            <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
                <HeaderThreeButton
                    title='Restaurants'
                    isHome={true}
                    isGallery={false}
                    isenableMore={false}
                    navPress={navPress}
                    bgColor='#ff7900'
                    
                />
                {this.state.isLoading? 
                <View style= {{flex:1, justifyContent:"center", alignItems: "center"}}>
                    <ActivityIndicator size="large" color="#ff7900" />
                </View>
                :
                this.state.Restaurantsapi.length == 0?
                <Text style={{textAlign: "center" , marginTop: 15}}>No Data Found</Text>:
           
                <FlatList
                    contentContainerStyle={{paddingVertical: 5}}
                    data={this.state.Restaurantsapi}
                    renderItem={({item}) =>
                    
                        <View style={{
                            width: "100%",
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                        }}>
                            <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate("Rcatsidemenu",{item:item})}
                            style={{width:"100%"}}
                            >
                            <ImageBackground source={{uri:('gallery', item.ImgPath)}}
                                resizeMode='stretch'
                                    style={{
                                        flex: 1,
                                        height: 140,
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: "100%",
                                        
                                        backgroundColor:"black"
                                    }}
                                    imageStyle= {{opacity:0.8}}
                                    >
                                                 
                                <Text style={{fontSize: 16, color: 'white'}}>{item.Title}</Text>
                            </ImageBackground>
                            </TouchableOpacity>
                        </View>
                            
                    
                    //  < this.ItemData data={item}/>
                }
                    keyExtractor={item => item.id}
                />
            }
                {/* <MaterialSnackbar ref={snackbarRef}/> */}
            </View>
    );
}

//  ItemData({data}) {
//     return (
       
//             );
//           }
        }
export default RestaurantsApp;            