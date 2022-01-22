import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View ,
    FlatList,
    ImageBackground,
    Dimensions,
    Alert,
    ActivityIndicator,
} from 'react-native'
// import styles from "../style/Indexstyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import SwipeBackView from "../../components/SwipeBack";
// import DrawerMenuLeft from "../../components/DrawerMenuLeft";
// import MaterialSnackbar from "../../components/MaterialSnackbar";
// import {storageImageUrl} from "../../tools/Helpers";
// import HeaderThreeButton from "../../components/HeaderThreeButton";
const screenWidth = Dimensions.get('window').width;




class RestaurantscategoryApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Restaurantscategoryapi:[],
            isLoading:true
        }
    }
 
   async componentWillMount(){
        const  item  = this.props.route.params.item;
        console.log(item)
       const value = await AsyncStorage.getItem("token_key")
        // .then(req => JSON.parse(req))
        //   .then(value => {
        //     console.log(value)
        //     //  this.setState({Token:value});
        //   })

       const value1 = await AsyncStorage.getItem("LanguageId_key")
        // .then(req => JSON.parse(req))
        //   .then(value1 => {
        //     console.log(value1)
        //     //  this.setState({Token:value});
        //   })
          
          
        
            this.API(value, value1, item)
        }
        API=(value, value1, item)=>{
            var myHeaders = new Headers();
            myHeaders.append("Cookie", "ci_session=do77uiriekpp139jgrbi7iuit829a9r3");

            var formdata = new FormData();
            formdata.append("token", value);
            formdata.append("HotelRestaurantHeaderId", item.HotelRestaurantHeaderId);
            formdata.append("languageid", value1);

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
            };
    fetch("http://managecontour.crazymonkey.tech/index.php/api/Hotelrestomenucatheader/get_all", requestOptions)
    .then(response => response.json())
    .then(result =>{
        console.log(result)
        //    console.log(result.data)
        if(result.status == 200){
        this.setState({Restaurantscategoryapi:result.data});
        this.setState({isLoading:false})
        }else{
            this.setState({isLoading:false})
        }
    })
    .catch(error => console.log('error', error));

        // })
        // })
        }

        Menu = () => {
            Alert.alert("menu Pressed")
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
           this.state.Restaurantscategoryapi.length == 0?
           <Text style={{textAlign: "center"}}>No Data Found</Text>:
           <FlatList
                contentContainerStyle={{padding: 5}}
                data={this.state.Restaurantscategoryapi}
                numColumns={2}
                renderItem={({item}) =>
                <View style={{width: "48%", padding: 5}}>
                    <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate("Rcatmenusidemenu",{item:item})}
                            style={{width:"100%"}}
                            >
                        <ImageBackground 
                            source={{uri:( item.ImgPath )}}
                            imageStyle= {{opacity:0.8}}
                             style={{
                                 height: 210,
                                 justifyContent: 'flex-end',
                                 padding: 10,
                                 borderRadius: 3,
                                 shadowRadius: 3,
                                 elevation: 3,
                                 shadowOffset: {width: 0, height: 2},
                                 shadowOpacity: 0.3,
                                 overflow: 'hidden',
                                 backgroundColor:"black"
                             }}>
                <Text style={{fontSize: 18,fontWeight: "500%", marginBottom: 8, color: 'white'}}>{item.MenuCategoryTitle}</Text>
              
                 <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                    {/* <Text style={{fontSize: 12, marginLeft: 0, color: 'white'}}>Price:</Text>        */}
                    {/* <Text style={{fontSize: 12, marginLeft: 0, color: 'white'}}>Price{item.Price}</Text>
                </View>     */}
                </View>
            </ImageBackground>
            </TouchableOpacity>
        </View>
        
                //  <this.ItemData data={item}/>
                }
                keyExtractor={item => item.id}
            />
    
         
            } 
            {/* <MaterialSnackbar ref={snackbarRef}/> */}
        </View>
    );
}


        }
export default  RestaurantscategoryApp; 


