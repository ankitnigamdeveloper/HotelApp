import React, {useContext,useState, useRef} from 'react';
import {Dimensions, StatusBar, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import SwipeBackView from "../../components/SwipeBack";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import DrawerMenuLeft from "../../components/DrawerMenuLeft";
import CategoryMenu from './RoomCategorymenu'

const screenWidth = Dimensions.get('window').width;

const DATA = [
    {id: '0', title: 'Home',name:"Homes", bgColor: '#ff5722', icon: require('../../assets/icon/ic_menu1_photos.png')},
    {id: '1', title: 'Restaurant',name:"Homes", bgColor: '#00bfa5', icon: require('../../assets/icon/ic_menu1_videos.png')},
    {id: '2', title: 'Room Services',name:"Homes", bgColor: '#7cb342', icon: require('../../assets/icon/ic_menu1_messages.png')},
    {id: '3', title: 'Activities',name:"Homes", bgColor: '#448aff', icon: require('../../assets/icon/ic_menu1_settings.png')},
    {id: '4', title: 'Event',name:"Homes", bgColor: '#fbc02d', icon: require('../../assets/icon/ic_menu1_friends.png')},
    {id: '5', title: 'Hotel Info',name:"Homes", bgColor: '#d81b60', icon: require('../../assets/icon/ic_menu1_notifs.png')},
    {id: '6', title: 'My Booking',name:"Homes", bgColor: '#d81b60', icon: require('../../assets/icon/ic_menu1_messages.png')},
    {id: '7', title: '',name:"Homes",},
    {id: '8', title: '',name:"Homes", },
];

function MenuStyle1({navigation, route}) {
    // const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const leftMenuRef = useRef(null);
    const onMenuPress = (id) => {
        // alert(id)
        // AsyncStorage.setItem('@tag_key',id).then(()=>
        navigation.navigate("Menuside",{tag:id})
        // )
        // snackbarRef.current.ShowSnackBarFunction(`menu ${title} clicked`);
        // leftMenuRef.current.navigateMenu();
        
        // Tag=id
    };
    return (
        <SwipeBackView style={{flex: 1, backgroundColor: 'gray'}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <DrawerMenuLeft
                ref={leftMenuRef}
                style={{marginTop: 56}}
                menuWidth={screenWidth}
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress}/>}
                renderPage={() => <MainContent navigation={navigation} route={route} navPress={() => leftMenuRef.current.navigateMenu()} snackbarRef={snackbarRef}
            />}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function MainContent({navPress, navigation, route}) {
    const onCardPress = () => {
        // alert(id)
        // AsyncStorage.setItem('@tag_key',id).then(()=>
        navigation.navigate("RoomCheckout")
        // )
        };
   
    return (
        <View style={{flex: 1}}>
            <View style={{
                height: 56,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                backgroundColor: "#ff7900",
                elevation:  3,
                shadowOffset: {width: 0, height:  2 },
                shadowOpacity: 0.3 
            }}>
                <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_home.png')} style={{height: 16, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            
           
            <Text style={{flex: 1, paddingHorizontal: 10, fontSize: 20, color: 'white'}}>Service Menu</Text>
            
                <TouchableOpacity 
                onPress={onCardPress}
                 style={{padding: 18}}>
                     <Image source={require('../../assets/icon/ic_shoppig_cart.png')} style={{height: 36, width: 36, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            
            
        </View>
            <CategoryMenu navigation={navigation} route={route}/>
        </View>
    );
}

function LeftMenuContainer({onMenuPress}) {
    return (
        <View style={{width: screenWidth, backgroundColor: '#8e24aa'}}>
            <FlatList
                data={DATA}
                contentContainerStyle={{alignItems: 'space-between'}}
                renderItem={({item}) => <ItemMenu data={item} onMenuPress={onMenuPress}/>}
                keyExtractor={item => item.id}
                numColumns={3}
            />
        </View>
    );
}

function ItemMenu({data, onMenuPress,navigation,onPress,navPress}) {
    return (
        <TouchableOpacity style={{width: '32%', margin: 1, alignItems: 'center', paddingVertical: 20}} 
        onPress={() => onMenuPress(data.id)}
        // onPress={() => navigation.navigate()}
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
            <Text style={{fontSize: 12, color: 'white', marginTop: 8}}>{data.title}</Text>
        </TouchableOpacity>
    );

}

export default MenuStyle1;
