import React, { Component, } from 'react';
import {
    Text,
    TouchableOpacity,
    View ,
    Image,
    Alert,
    FlatList,
    Dimensions,
    ActivityIndicator
} from 'react-native'
// import styles from "../style/Indexstyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderThreeButton from "../../components/HeaderThreeButton";
// import MaterialButton from "../components/MaterialButton";
// import MaterialInput from "../components/MaterialInput";
// import MaterialSnackbar from "../components/MaterialSnackbar";
// const screenWidth = Dimensions.get('window').width;




class HotelinfoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            InfoTitle:"",
            InfoDesc:"",
            DATA:[],
            isLoading:true
        }
    }

     ProfileStyle21() {
        const pageContext = useContext(PageContext);
        const snackbarRef = useRef(null);
    }
   
   



    componentDidMount(){
        AsyncStorage.getItem("LanguageId_key")
        // .then(req => JSON.parse(req))
          .then(languageId => {
            console.log(languageId)
            //  this.setState({id:value});
            
          
            AsyncStorage.getItem("@User_key")
        .then(req => JSON.parse(req))
          .then(user => {
            // console.log(user)
            //  this.setState({id:value});
          
         
    var myHeaders = new Headers();
myHeaders.append("Cookie", "ci_session=2urkejomftvvh0ioradimi40p8tok014");

var formdata = new FormData();
formdata.append("token", user.token);
formdata.append("languageid", languageId);
formdata.append("hotelid", user.hotelid);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("http://managecontour.crazymonkey.tech/index.php/api/Hotelinfoheader/get_all", requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.status == 200){
    this.setState({DATA:result.data});
      this.setState({InfoTitle:result.data[0].InfoTitle});
      this.setState({InfoDesc:result.data[0].InfoDesc});
    }
    this.setState({isLoading:false})
    // console.log(user.token)
 })
  .catch(error => console.log('error', error));
    
          })
        })
    
    }
    Hotel = (item) => {
        // Alert.alert("hotel Pressed")
        this.props.navigation.navigate('HotelinfodescriptionM',{item:item,})
    }
  

    render() {
        const { navPress } = this.props
        return (
            <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
                 <HeaderThreeButton
                    title='Hotel Info'
                    isHome={true}
                    navPress={navPress}
                    searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                    morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                    bgColor='#ff7900'
                    isGallery={false}
                    isenableMore={false}
                />

                {this.state.isLoading? 
                <View style= {{height:"100%", justifyContent:"center", alignItems: "center"}}>
                    <ActivityIndicator size="large" color="#ff7900" />
                </View>
           :
           this.state.DATA.length == 0?
           <Text style={{textAlign: "center" , marginTop: 15}}>No Data Found</Text>:
           
                <View style={{
                    // margin: 10,
                    backgroundColor: 'white',
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                }}>
                    
                    <FlatList
                        contentContainerStyle={{paddingVertical: 0}}
                        data={this.state.DATA}
                        renderItem={({item}) => 
                        // < this.ItemData data={item}/>
                        <TouchableOpacity 
                            onPress={() =>  this.Hotel(item)}
                            style={{
                                width: '100%',
                                paddingVertical: 20,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: 20,
                                alignItems: 'center',
                                borderBottomColor: '#e4e4e4',
                                borderBottomWidth: 1
                            }}>
                                <Text style={{fontSize: 16, color: '#616161'}}>{item.InfoTitle}</Text>
                                <Image source={require('../../assets/icon/ic_chevron_right.png')}
                                    style={{width: 15, height: 15, resizeMode: 'contain', tintColor: '#aeaeae'}}/>
                                    
                            </TouchableOpacity>
                            
                    }
                        keyExtractor={item => item.id}
                        >
        
                    </FlatList>
    
                </View>
    }
            </View>
        // </View>
    );
}

          }
        
    
export default HotelinfoApp; 