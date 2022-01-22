import React, {useContext,useState, useRef, Component, useEffect} from 'react';
// import { StatusBar } from 'expo-status-bar';
import {Dimensions,Button, FlatList, Image, Text, TouchableOpacity, View,use,Alert, StatusBar} from "react-native";
import SwipeBackView from "../components/SwipeBack";
import {PageContext} from "../App";
import HeaderThreeButton from "../components/HeaderThreeButton";
import DrawerMenuLeft from "../components/DrawerMenuLeft";
import Restaurants from "./Restorant/Restaurants"
import Homes from "./HotelInfo/Homes"
import Hotelinfo from './HotelInfo/Hotelinfo';
import Event from './Event/EventList'
import RoomSevice from './RoomServise/ServiceList'
import MyBookig from './Booking/MyBooking';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Activities from "./Activity/ActivityCategory"
const screenWidth = Dimensions.get('window').width;
var Tag = "0";
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const DATA = [
    {id: '0', title: 'Home',name:"Homes", bgColor: '#ff5722', icon: require('../assets/icon/ic_menu1_photos.png')},
    {id: '1', title: 'Restaurant',name:"Homes", bgColor: '#00bfa5', icon: require('../assets/icon/ic_menu1_videos.png')},
    {id: '2', title: 'Room Services',name:"Homes", bgColor: '#7cb342', icon: require('../assets/icon/ic_menu1_messages.png')},
    {id: '3', title: 'Activities',name:"Homes", bgColor: '#448aff', icon: require('../assets/icon/ic_menu1_settings.png')},
    {id: '4', title: 'Event',name:"Homes", bgColor: '#fbc02d', icon: require('../assets/icon/ic_menu1_friends.png')},
    {id: '5', title: 'Hotel Info',name:"Homes", bgColor: '#d81b60', icon: require('../assets/icon/ic_menu1_notifs.png')},
    {id: '6', title: 'My Booking',name:"Homes", bgColor: '#d81b60', icon: require('../assets/icon/ic_menu1_messages.png')},
    {id: '7', title: '',name:"Homes",},
    {id: '8', title: '',name:"Homes", },
    
];

function MenuStyle1({navigation,route}) {
    // const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const leftMenuRef = useRef(null);

    // React.useEffect(() => {
    //     if (route.params?.post) {
    //       // Post updated, do something with `route.params.post`
    //       // For example, send the post to the server
    //     }
    //   }, [route.params?.post]);
    

    
    const onMenuPress = (id,) => {
        // navigation.navigate(title)
        // snackbarRef.current.ShowSnackBarFunction(`menu ${title} clicked`);
        leftMenuRef.current.navigateMenu();
        if(id == "7" ){
            // Tag = Tag
            AsyncStorage.setItem('@tag_key',Tag)
        }else if(id == "8"){
            AsyncStorage.setItem('@tag_key',Tag)
        }
        else{
        Tag=id
        AsyncStorage.setItem('@tag_key',id)
        }
    };
    


    if (route.params?.tag) {
    const { tag } = route.params;
// const Govind = params.Govind;
console.log("Govindsing",tag)
Tag = tag
    }
// room_id = params.room_id
const [dimensions, setDimensions] = useState({ window, screen });
// const [height , setHeight] = useState(StatusBar.currentHeight)


    return (
        <SwipeBackView style={{flex: 1, backgroundColor: 'gray'}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <DrawerMenuLeft
                ref={leftMenuRef}
                style={{marginTop: 56}}
                menuWidth={screenWidth}
                renderMenuComponent={() => <LeftMenuContainer navigation={navigation} onMenuPress={onMenuPress}/>}
                renderPage={() => <MainContent navigation={navigation} navPress={() => leftMenuRef.current.navigateMenu()} snackbarRef={snackbarRef}
                // onPress={() => navigation.navigate('Signup')}
                />}
            />
            {/* <MaterialSnackbar ref={snackbarRef}/> */}
        </SwipeBackView>
    );
}

function MainContent({navPress, snackbarRef,navigation,route}) {
    

    const [dimensions, setDimensions] = useState({ window, screen });
    // const [height , setHeight] = useState(StatusBar.currentHeight)

    useEffect(() => {
      const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
        setDimensions({ window, screen });
      });
      return () => subscription?.remove();
    });
    // const { Govind } = route.params;
    return (
        <View style={{flex: 1,
        // marginTop:StatusBar.currentHeight
        }}>
            {/* <Text>Govind: {JSON.stringify(Govind)}</Text> */}
            {(() => {
              if(Tag == "3"){
                return (
                    <HeaderThreeButton
                title='Activity Category'
                isHome={true}
                isGallery={false}
                isenableMore={false}
                navPress={navPress}
                bgColor='#ff7900'
                
            />
                )
            }
            else if(Tag == "4"){
                return (
                    <HeaderThreeButton
                title='Event'
                isHome={true}
                isGallery={false}
                isenableMore={false}
                navPress={navPress}
                bgColor='#ff7900'
            />
                )
            }

            else if(Tag == "5"){
            //     return (
            //         <HeaderThreeButton
            //     title='Gallery'
            //     isHome={true}
            //     isGallery={false}
            //     isenableMore={false}
            //     navPress={navPress}
            //     bgColor='#ff7900'
            // />
            //     )
            }
              return null;
            })()}
            {/* <DummyPage/> */}
            {/* <Gallery/> */}



            {/* {Tag == "0"?<Gallery  navigation={navigation}/>:<Signup  navigation={navigation}/>} */}
            

            {(() => {
              if (Tag == '0'){
                  return (
                    <View style={{flex:1}}>
                         <Homes navigation={navigation} navPress = {navPress}/>
                    </View>
                    
                  )
              }
              else if(Tag == "1"){
                  return (
                      <Restaurants navigation={navigation} navPress = {navPress}/>
                  )
              }
              else if(Tag == "2"){
                return (
                    <RoomSevice navigation={navigation} navPress = {navPress}/>
                )
            }
            else if(Tag == "3"){
                return (
                    <Activities navigation={navigation}/>
                )
            }
            else if(Tag == "4"){
                return (
                    // <Event navigation={navigation}/>
                    
                    <Text style={{textAlign:'center',marginTop:20}}>Work in progress</Text>
                )
            }
            else if(Tag == "5"){
                return (
                    // <Button title = "LogOut" onPress={()=>AsyncStorage.clear()}></Button>
                    // <Text style={{textAlign:'center',marginTop:20}}>Work in progress</Text>
                    < Hotelinfo  navigation={navigation} navPress = {navPress}/>
                )
            }
            else if(Tag == "6"){
                return (
                    // <Button title = "LogOut" onPress={()=>AsyncStorage.clear()}></Button>
                    // <Text style={{textAlign:'center',marginTop:20}}>Work in progress</Text>
                    <MyBookig navigation={navigation} navPress = {navPress}/>
                )
            }
            else{
                return (
                    <View style={{flex:1}}>
                         <Homes/>
                    </View>
                    
                  )
            }
              
            })()}

        </View>
    );
}

function LeftMenuContainer({onMenuPress, navigation}) {
    const [dimensions, setDimensions] = useState({ window, screen });
    // const [height , setHeight] = useState(StatusBar.currentHeight)

    useEffect(() => {
      const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
        setDimensions({ window, screen });
      });
      return () => subscription?.remove();
    });
    return (
        <View style={{width: dimensions.window.width, backgroundColor: '#8e24aa'}}>
            <FlatList
                data={DATA}
                contentContainerStyle={{alignItems: 'space-between'}}
                renderItem={({item}) => <ItemMenu data={item} navigation={navigation} onMenuPress={onMenuPress}/>}
                keyExtractor={item => item.id}
                numColumns={3}
            />
        </View>
    );
}

function ItemMenu({data, onMenuPress, navigation}) {

    
    return (
        <TouchableOpacity style={{width: "32%", margin: 1, alignItems: 'center', paddingVertical: 20}} 
           onPress={() => onMenuPress(data.id)}
        // onPress={() => navigation.navigate("Barcode")}
        // onPress={onPress}
           >
            <View style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: data.bgColor
            }}>
                <Image source={data.icon}
                       style={{height: '35%', width: '35%', resizeMode: 'contain'}}/>
            </View>
            {/* <Text style={{fontSize: 12, color: 'white', marginTop: 8}}>{data.title}</Text> */}
            <Text style={{fontSize: 12, color: 'white', marginTop: 8}}>{data.title}</Text>
        </TouchableOpacity>
    );

}

export default MenuStyle1;