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


class RestaurantsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
           Data:[],
           isLoading:true

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
        // formdata.append("serviceType", "1");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        fetch("http://managecontour.crazymonkey.tech/index.php/api/Hotelcategoryheader/get_all", requestOptions)
        .then(response => response.json())
        .then(result => {
            // console.log(result)
            if(result.status == 200){
            // console.log(result.data)
            this.setState({Data:result.data});
            }
            this.setState({isLoading:false})
        })
        .catch(error => console.log('error', error));
        })
          })
    }
      
   
      
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
                {/* <HeaderThreeButton
                    title='Restaurants'
                    isGallery={false}
                    isenableMore={false}
                    isHome={true}
                    navPress={() => this.Menu}
                    searchPress={() => this.Search}
                    morePress={() => this.Dots}
                    bgColor='#8bc34a'
                /> */}
                {this.state.isLoading? 
                <View style= {{flex:1, justifyContent:"center", alignItems: "center"}}>
                    <ActivityIndicator size="large" color="#ff7900" />
                </View>
           :
           this.state.Data.length == 0?
           <Text style={{textAlign: "center" , marginTop: 15}}>No Data Found</Text>:
           
                <FlatList
                    contentContainerStyle={{paddingVertical: 5}}
                    data={this.state.Data}
                    renderItem={({item}) =>
                    
                        <View style={{
                            width: "100%",
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                        }}>
                            <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate("ActivityMenu",{item:item})}
                            style={{width:"100%"}}
                            >
                            <ImageBackground source={{uri: item.HotelImage}}
                            resizeMode='stretch'
                            imageStyle= {{opacity:0.8}}
                                style={{
                                    flex: 1,
                                    height: 140,
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor:"black"
                                }}>
                                <Text style={{fontSize: 16, color: 'white'}}>{item.CategoryDescription}</Text>
                              
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