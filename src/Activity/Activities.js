import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View ,
    Dimensions,
    FlatList,
    ImageBackground,
    Image,
    ActivityIndicator
} from 'react-native'
// import styles from "../style/Indexstyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
// import {PageContext} from "../../App";
import {storageImageUrl} from "../../tools/Helpers";
const screenWidth = Dimensions.get('window').width;



class ActivitiesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

            Hotelactivityapidata:[],
            isLoading:true
            //  DATA : [
            //     {id: '1', image: 'profile_1_post_1.jpg', title: 'Book Shelf'},
            //     {id: '2', image: 'profile_1_post_2.jpg', title: 'Bedroom'},
            //     {id: '3', image: 'profile_1_post_3.jpg', title: 'Book Shelf'},
            //     {id: '4', image: 'profile_1_post_4.jpg', title: 'Workspace'},
            //     {id: '5', image: 'profile_1_post_1.jpg', title: 'Book Shelf'},
            //     {id: '6', image: 'profile_1_post_2.jpg', title: 'Bedroom'},
            // ],
            

        }
    }
    componentDidMount(){
        const item= this.props.route.params.item
        AsyncStorage.getItem("@User_key")
        .then(req => JSON.parse(req))
          .then(user => {
           AsyncStorage.getItem("LanguageId_key")
        // .then(req => JSON.parse(req))
          .then(value1 => {
            console.log(value1)
            //  this.setState({Token:value});



        var myHeaders = new Headers();
        myHeaders.append("Cookie", "ci_session=q8em1rq8a79qc6m7r7035j2f3187pms3");
        
        var formdata = new FormData();
        formdata.append("token", user.token);
        formdata.append("languageid", value1);
        formdata.append("hotelid", user.hotelid);
        formdata.append("HotelActivityHeaderId", item.HotelCategoryId);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://managecontour.crazymonkey.tech/index.php/api/Hotelactivity/get_all", requestOptions)
          .then(response => response.json())
          .then(result => {
              if(result.status == 200){
              this.setState({Hotelactivityapidata:result.data});
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
                {this.state.isLoading? 
                <View style= {{flex:1, justifyContent:"center", alignItems: "center"}}>
                <ActivityIndicator size="large" color="#ff7900" />
                </View>
        //    <Text style={{textAlign: "center"}}>Loading....</Text>
        //    </View>
           :
           this.state.Hotelactivityapidata.length == 0?
           <Text style={{textAlign: "center"}}>No Data Found</Text>:
           
           <FlatList
                contentContainerStyle={{padding: 5}}
                data={this.state.Hotelactivityapidata}
                numColumns={2}
                renderItem={({item}) => 
                <View style={{width: (screenWidth / 2) - 5, padding: 5}}>
                    <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate("ActivityDetailMenu",{item:item})}
                    style={{width:"100%"}}
                    >
            <ImageBackground source={{uri:('profile', item.HotelActivityImage )}}
                imageStyle={{opacity:0.8,resizeMode:"stretch",}}
                style={{
                    height: 210,
                    justifyContent: 'flex-end',
                    padding: 10,
                    borderRadius: 3,
                    shadowRadius: 3,
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    backgroundColor:"black",
                    
                    overflow: 'hidden'
                }}>
                <Text style={{fontSize: 16, marginBottom: 8, color: 'white', shadowOpacity:1, }}>{item.HotelActivityTitle}</Text>
                 <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                    <Text style={{fontSize: 12, marginLeft: 0, color: 'white'}}>Price  {item.Price}</Text>
                </View>    
            </ImageBackground>
            </TouchableOpacity>
        </View>
        
            }
                keyExtractor={item => item.id}
            />}
        </View>
    );
}

 TabTitle({title, subtitle}) {
    return (
        <View style={{marginVertical: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: '#616161'}}>{title}</Text>
            <Text style={{fontSize: 12, color: '#616161'}}>{subtitle}</Text>
        </View>
    );
}

        }
export default ActivitiesApp;  