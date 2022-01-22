import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View ,
    Dimensions,
    Image,
    FlatList,
    Alert,
} from 'react-native'
// import styles from "../style/Indexstyle";
import AsyncStorage from '@react-native-async-storage/async-storage';

// import MaterialSnackbar from "../../components/MaterialSnackbar";
// import {storageImageUrl} from "../../tools/Helpers";
// import HeaderThreeButton from "../../components/HeaderThreeButton";
const screenWidth = Dimensions.get('window').width;




class  RestaurantscategorymenuApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
             DATA : []
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
    formdata.append("HotelRestoMenuCatHeaderId", "1");
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
          console.log(result.data)
          this.setState({DATA:result.data});
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
            <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <FlatList
                contentContainerStyle={{paddingVertical: 5}}
                data={this.state.DATA}
                renderItem={({item}) => 
                <View style={{
                    width: screenWidth,
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 15,
                    borderBottomColor: '#bdbdbd',
                    borderBottomWidth: 0.5
                }}>
                    <Image source={{uri:( item.ImgPath)}}
                           style={{
                               width: 80,
                               height: 80,
                               borderRadius: 3,
                               overflow: 'hidden',
                               shadowOffset: {width: 0, height: 2},
                               shadowOpacity: 0.3
                           }}/>
                    <View style={{flex: 1, paddingLeft: 15}}>
                        <Text style={{fontSize: 16, color: '#616161'}}>{item.MenuTitle}</Text>
                        {/* <Text style={{fontSize: 14, color: '#9e9e9e', lineHeight: 20, marginTop: 10}}>{data.Price}</Text> */}
                        <Text style={{fontSize: 14, color: '#616161'}}>Price:{item.Price}</Text>
                        <Text style={{fontSize: 14, color: '#616161'}}>{item.MenuDesc}</Text>
                    </View>
                    <TouchableOpacity style={{height:50,width:50}}>
                        <Image 
                        source={require("../../assets/addtocart.png")}
                        style={{height:40, width:40}}
                        />
                    </TouchableOpacity>
                    
                </View>
        
            }
                keyExtractor={item => item.id}
            />
            {/* <MaterialSnackbar ref={snackbarRef}/> */}
        </View>
    );
}

        }
export default  RestaurantscategorymenuApp; 