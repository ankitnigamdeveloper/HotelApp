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
// import MaterialSnackbar from "../../components/MaterialSnackbar";
// import {PageContext} from "../../App";
// import {storageImageUrl} from "../../tools/Helpers";
const screenWidth = Dimensions.get('window').width;



class ActivitiesApp extends Component {
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
          .then(value1 => {
            console.log(value1)
            //  this.setState({Token:value});



        var myHeaders = new Headers();
        myHeaders.append("Cookie", "ci_session=q8em1rq8a79qc6m7r7035j2f3187pms3");
        
        var formdata = new FormData();
        formdata.append("token", user.token);
        formdata.append("languageid", value1);
        formdata.append("hotelid", user.hotelid);
        formdata.append("serviceType", "2");
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://managecontour.crazymonkey.tech/index.php/api/Hotelrestaurantheader/get_all", requestOptions)
          .then(response => response.json())
          .then(result => {
              if(result.status == 200){
              this.setState({Data:result.data});
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
                title='Room Service'
                isHome={true}
                isGallery={false}
                isenableMore={false}
                navPress={navPress}
                bgColor='#ff7900'
                />
                {this.state.isLoading? 
                <View style= {{height:"100%", justifyContent:"center", alignItems: "center"}}>
                    <ActivityIndicator size="large" color="#ff7900" />
                </View>
           :
           this.state.Data.length == 0?
           <Text style={{textAlign: "center" , marginTop: 15}}>No Data Found</Text>:
           
           <FlatList
                contentContainerStyle={{padding: 5}}
                data={this.state.Data}
                numColumns={2}
                renderItem={({item}) => 
                <View style={{width: (screenWidth / 2) - 5, padding: 5}}>
                    <TouchableOpacity 
                    // onPress={()=> this.props.navigation.navigate("RoomCSideMenu",{item:item})}
                    >
                <ImageBackground source={{uri: item.ImgPath}}
                imageStyle={{opacity: 0.8}}
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
                    <Text style={{fontSize: 18, marginBottom: 8, color: 'white'}}>{item.Title}</Text>
                     <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                        {/* <Text style={{fontSize: 12, marginLeft: 0, color: 'white'}}>Price:</Text>        */}
                        {/* <Text style={{fontSize: 12, marginLeft: 0, color: 'white'}}>Price{item.Price}</Text> */}
                    </View>    
                </ImageBackground>
                </TouchableOpacity>
            </View>
            }
                keyExtractor={item => item.id}
            />
        }
            {/* <MaterialSnackbar ref={snackbarRef}/> */}
        </View>
    );
}

}
export default ActivitiesApp;  