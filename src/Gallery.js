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
} from 'react-native'
// import styles from "../style/Backgroundstyle";


import MaterialSnackbar from "../components/MaterialSnackbar";
import {storageImageUrl} from "../tools/Helpers";
import HeaderThreeButton from "../components/HeaderThreeButton";
const screenWidth = Dimensions.get('window').width;



class BackgroundApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
             DATA :[
                {id: '1', image: 'gallery_9_img_1.jpg', title: 'Urban Skyscrapers'},
                {id: '2', image: 'gallery_9_img_2.jpg', title: 'Citywalks'},
                {id: '3', image: 'gallery_9_img_3.jpg', title: 'Nature'},
                {id: '4', image: 'gallery_9_img_4.jpg', title: 'Mountain'},
            ]

        }
    }
    Menu= () => {
        Alert.alert("MenuPress")
        }
    Search= () => {
        Alert.alert("SearchPress")
        }    
    Dots= () => {
        Alert.alert("Threedot's Press")
        }    
   
      
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
                {/* <HeaderThreeButton
                    title='Gallery'
                    isGallery={false}
                    isenableMore={false}
                    isHome={true}
                    navPress={() => this.Menu}
                    searchPress={() => this.Search}
                    morePress={() => this.Dots}
                    bgColor='#8bc34a'
                /> */}
                <FlatList
                    contentContainerStyle={{paddingVertical: 5}}
                    data={this.state.DATA}
                    renderItem={({item}) => < this.ItemData data={item}/>}
                    keyExtractor={item => item.id}
                />
                {/* <MaterialSnackbar ref={snackbarRef}/> */}
            </View>
    );
}

 ItemData({data}) {
    return (
        <View style={{
            width: screenWidth,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
        }}>
            <ImageBackground source={{uri: storageImageUrl('gallery', data.image)}}
                             style={{
                                 flex: 1,
                                 height: 140,
                                 borderRadius: 3,
                                 overflow: 'hidden',
                                 alignItems: 'center',
                                 justifyContent: 'center'
                             }}>
                <Text style={{fontSize: 16, color: 'white'}}>{data.title}</Text>
                <Text style={{fontSize: 12, color: 'white', marginTop: 5}}>19 Photos</Text>
            </ImageBackground>
        </View>
            
            );
          }
        }
export default BackgroundApp;            