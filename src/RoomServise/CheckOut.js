import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, View, StatusBar} from "react-native";
// import {PageContext} from "../../../App";
// import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderShopping from "../../components/HeaderShopping";
import SwipeMenuRight from "../../components/SwipeMenuRight";
import {storageImageUrl} from "../../tools/Helpers";
import FloatingButton from "../../components/FloatingButton";
import MaterialButton from "../../components/MaterialButton";
const DATA = [
    {id: '1', image: 'ecommerce_10_img_1.jpg', title: 'Zara Jumpsuit Dress'},
    {id: '2', image: 'ecommerce_10_img_2.jpg', title: 'Blue Sky Dress'},
    {id: '3', image: 'ecommerce_10_img_3.jpg', title: 'Black Faux Leather'},
    {id: '4', image: 'ecommerce_10_img_3.jpg', title: 'Black Faux Leather'},
];

const screenWidth = (Dimensions.get('window').width);

class EcommerceStyle21 extends React.Component {
constructor(props){
    super(props);
    this.state = {
        item:1
    }
    this.snackbarRef = React.createRef(null);
    this.itemRef = React.createRef(null);
}
    render(){
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderShopping
                title='Shopping Cart'
                navPress={() => this.props.navigation.goBack()}
                // cartPress={() => this.snackbarRef.current.ShowSnackBarFunction('cart clicked')}
                bgColor='#ff9800'
                shadow={false}
                numItems={DATA.length}
            />
            <FlatList
                contentContainerStyle={{padding: 5}}
                data={DATA}
                renderItem={({item}) => 
                <View>
                <SwipeMenuRight
                    ref={this.itemRef}
                    menuWidth={160}
                    style={{backgroundColor: 'transparent', elevation: 10}}
                    renderMenuComponent={() => 
                        <View style={{width: 160, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <FloatingButton style={{backgroundColor: '#448aff', position: 'relative'}}
                                        image={require('../../assets/icon/ic_edit2.png')}
                                        imageStyle={{tintColor: 'white'}}
                                        onPress={() => onPressMenu('edit')}/>
                        <FloatingButton style={{backgroundColor: '#e53935', position: 'relative', marginLeft: 15}}
                                        image={require('../../assets/icon/ic_close.png')}
                                        imageStyle={{tintColor: 'white'}}
                                        onPress={() => onPressMenu('delete')}/>
                    </View>
            
                    // <ItemMenu onPressItemMenu={onPressItemMenu} data={item} itemRef={itemRef}/>
                }
                    renderPage={() => 
                    // <ItemData data={data}/>
                    <View style={{width: screenWidth - 10, padding: 5}}>
                    <View style={{
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 0.3,
                        shadowRadius: 3,
                        borderRadius: 3,
                        elevation: 3,
                    }}>
                        <View style={{height: 120, width: 120, overflow: 'hidden',}}>
                            <Image style={{height: '100%', width: '100%'}}
                                   source={{uri: storageImageUrl('ecommerce', item.image)}}/>
                        </View>
                        <View style={{flex: 1, padding: 15}}>
                            <Text style={{fontSize: 17, color: '#263238'}}>{item.title}</Text>
                            <Text style={{fontSize: 14, color: '#616161'}}>Size M</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                                <FloatingButton size={34} style={{backgroundColor: '#ff9800', position: 'relative'}}
                                                image={require('../../assets/icon/ic_minus.png')}
                                                imageStyle={{tintColor: 'white', width: 20, height: 20}}
                                                // onPress={() => setItem1(item1 - 1)}
                                                />
                                <Text style={{width: 50, textAlign: 'center', fontSize: 14, color: '#bdbdbd'}}>{this.state.item}</Text>
                                <FloatingButton size={34} style={{backgroundColor: '#ff9800', position: 'relative'}}
                                                image={require('../../assets/icon/ic_plus.png')}
                                                imageStyle={{tintColor: 'white', width: 20, height: 20}}
                                                // onPress={() => setItem1(item1 + 1)}
                                                />
        
                            </View>
                            <Text style={{fontSize: 17, color: '#ff9800', position: 'absolute', bottom: 20, right: 15}}>$
                                125</Text>
                        </View>
                    </View>
                </View>
         
                }


                />
            </View>
                // <ItemActivity data={item} onPressItemMenu={onPressItemMenu}/>
            }
                keyExtractor={item => item.id}
            />
            <MaterialButton title='Confirm Order'
                            style={{
                                width: screenWidth - 20,
                                alignSelf: 'center',
                                height: 50,
                                marginBottom: 10,
                                backgroundColor: '#ff9800'
                            }}
                            buttonPress={() => this.snackbarRef.current.ShowSnackBarFunction('Apply filter clicked')}/>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
                backgroundColor: 'white',
                alignItems: 'center'
            }}>
                <Text style={{fontSize: 14, color: '#263238'}}>Total Price :</Text>
                <Text style={{fontSize: 20, color: '#ff9800'}}>$ 250</Text>
            </View>
            {/* <MaterialSnackbar ref={snackbarRef}/> */}
        </View>
    );
        }
}



export default EcommerceStyle21;