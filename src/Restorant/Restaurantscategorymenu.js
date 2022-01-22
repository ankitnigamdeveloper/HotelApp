import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View ,
    Dimensions,
    Image,
    FlatList,
    Alert,
    ActivityIndicator
} from 'react-native'
// import styles from "../style/Indexstyle";
import AsyncStorage from '@react-native-async-storage/async-storage';




class  RestaurantscategorymenuApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            Restaurantscategorymenuapi:[],
             DATA : [
                {id: '1', image: 'profile_25_post_1.jpg', title: 'Making Friends is Easy'},
                {id: '2', image: 'profile_25_post_2.jpg', title: 'I’m Born to Run'},
                {id: '3', image: 'profile_25_post_3.jpg', title: 'I Wandered Strange Roads'},
                {id: '4', image: 'profile_25_post_4.jpg', title: 'I Wanna be Careless'},
                {id: '5', image: 'profile_25_post_1.jpg', title: 'Making Friends is Easy'},
            ]
        }
    }
 componentDidMount(){
    const  item  = this.props.route.params.item;
    console.log(item)
    AsyncStorage.getItem("token_key")
    // .then(req => JSON.parse(req))
      .then(value => {
        console.log(value)
        //  this.setState({Token:value});

    AsyncStorage.getItem("LanguageId_key")
    // .then(req => JSON.parse(req))
      .then(value1 => {
        console.log(value1)
        //  this.setState({Token:value});

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=4tknttkqhdbi7b4lb7rb212drhj3jpld");
    
    var formdata = new FormData();
    formdata.append("token", value);
    formdata.append("HotelRestoMenuCatHeaderId", item.HotelRestoMenuCatHeaderId);
    formdata.append("languageid", value1);

    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("http://managecontour.crazymonkey.tech/index.php/api/Hotelrestomenuheader/get_all", requestOptions)
      .then(response => response.json())
      .then(result => {
        //   console.log(result)
        //   console.log(result.data)
        if(result.status == 200){
          this.setState({Restaurantscategorymenuapi:result.data});
      }
      this.setState({isLoading:false})
    })
      .catch(error => console.log('error', error));
})
})
 }
 Menu = () => {
    // Alert.alert("menu Pressed")
    this.props.navigation.navigate('Menuside')
}  
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
            {this.state.isLoading? 
                <View style= {{flex:1, justifyContent:"center", alignItems: "center"}}>
                    <ActivityIndicator size="large" color="#ff7900" />
                </View>
           :
           this.state.Restaurantscategorymenuapi.length == 0?
           <Text style={{textAlign: "center" , marginTop: 15}}>No Data Found</Text>:
           
            <FlatList
                contentContainerStyle={{paddingVertical: 5}}
                data={this.state.Restaurantscategorymenuapi}
                renderItem={({item}) => <this.ItemData data={item}/>}
                keyExtractor={item => item.id}
            />
                }
            {/* <MaterialSnackbar ref={snackbarRef}/> */}
        </View>
    );
}

 ItemData({data}) {
    return (
        <View style={{
            width: "100%",
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            borderBottomColor: '#bdbdbd',
            borderBottomWidth: 0.5
        }}>
            <Image source={{uri:( data.ImgPath)}}
                   style={{
                       width: 80,
                       height: 80,
                       borderRadius: 3,
                       overflow: 'hidden',
                       shadowOffset: {width: 0, height: 2},
                       shadowOpacity: 0.3
                   }}/>
            <View style={{flex: 1, paddingLeft: 15}}>
                <Text style={{fontSize: 16, color: '#616161'}}>{data.MenuTitle}</Text>
                {/* <Text style={{fontSize: 14, color: '#9e9e9e', lineHeight: 20, marginTop: 10}}>{data.Price}</Text> */}
                <Text style={{fontSize: 16, color: '#616161'}}>Price:{data.Price}</Text>
                <Text style={{fontSize: 14, color: '#616161'}}>{data.MenuDesc}</Text>
            </View>
            
        </View>

            
            );
          }
        }
export default  RestaurantscategorymenuApp; 