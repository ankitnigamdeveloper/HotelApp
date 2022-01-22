import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
// import MaterialSnackbar from "../../components/MaterialSnackbar";
// import {PageContext} from "../../../App";
// import {storageImageUrl} from "../../tools/Helpers";
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('window').width;

class ProfileStyle25 extends React.Component {
    // const pageContext = useContext(PageContext);
    // const snackbarRef = useRef(null);
    constructor(props){
        super(props);
        this.state = {
            todayevent : false,
            snackbarRef : null,
            EventData: []
        }
    }
    componentDidMount(){
        AsyncStorage.getItem("@User_key")
        .then(req => JSON.parse(req))
          .then(user => {
           AsyncStorage.getItem("LanguageId_key")
        // .then(req => JSON.parse(req))
          .then(langageId => {
            console.log(langageId)
            //  this.setState({Token:value});

        var myHeaders = new Headers();
        myHeaders.append("Cookie", "ci_session=9485selj41u9sbqnvt33n78fp685oob6");

        var formdata = new FormData();
        formdata.append("token", user.token);
        formdata.append("hotelid", user.hotelid);
        formdata.append("languageid", langageId);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        fetch("http://managecontour.crazymonkey.tech/index.php/api/Hoteleventheader/get_all", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            console.log(result.data)
            this.setState({EventData:result.data});
        })
        .catch(error => console.log('error', error));
        })
          })

    }
    render(){

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            {/* <HeaderThreeButton
                title='Profile'
                isHome={true}
                // navPress={() => pageContext.pageDispatch({page: 'pop'})}
                // searchPress={() => this.state.snackbarRef.current.ShowSnackBarFunction('search clicked')}
                // morePress={() => this.state.snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8e24aa'
            /> */}
            <View style={{
                backgroundColor: 'white',
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                {/* <View style={{
                    width: '100%',
                    paddingVertical: 10,
                    flexDirection: 'row',
                    paddingLeft: 20,
                    alignItems: 'center'
                }}>
                    <Image source={require('../../assets/icon/ic_profile5.png')}
                           style={{width: 50, height: 50, resizeMode: 'contain'}}/>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 17, color: '#616161'}}>Michael Hendley</Text>
                        <Text style={{fontSize: 12, color: '#616161', marginTop: 4}}>270 Followers • 345 Followings</Text>
                    </View>
                </View> */}
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={!this.state.todayevent?{
                        width: '50%',
                        height: '100%',
                        alignItems: 'center',
                        borderBottomWidth: 3,
                        borderBottomColor: '#8e24aa'
                    }:{
                        width: '50%',
                    height: '100%',
                    alignItems: 'center',
                    }}
                    onPress={()=>this.setState({todayevent:false})}
                    >
                        <View style={{marginVertical: 10, alignItems: 'center'}}>
                            <Text style={{fontSize: 20, color: '#616161'}}>All</Text>
                            <Text style={{fontSize: 12, color: '#616161'}}>Event</Text>
                        </View>
                        {/* <TabTitle title='All' subtitle='Event'/> */}
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{width: '33%', alignItems: 'center'}}>
                        <TabTitle title='346' subtitle='Photos'/>
                    </TouchableOpacity> */}
                    <TouchableOpacity style= {this.state.todayevent?{
                        width: '50%',
                        height: '100%',
                        alignItems: 'center',
                        borderBottomWidth: 3,
                        borderBottomColor: '#8e24aa'
                    }:{
                        width: '50%',
                    height: '100%',
                    alignItems: 'center',
                    }}
                    onPress={()=>this.setState({todayevent:true})}
                    >
                        <View style={{marginVertical: 10, alignItems: 'center'}}>
                            <Text style={{fontSize: 20, color: '#616161'}}>Today</Text>
                            <Text style={{fontSize: 12, color: '#616161'}}>Event</Text>
                        </View>
                        {/* <TabTitle title='Today' subtitle='Event'/> */}
                    </TouchableOpacity>
                </View>
            </View>
            {this.state.todayevent?
            <FlatList
                contentContainerStyle={{paddingVertical: 5}}
                data={this.state.EventData}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("EventDesMenu",{item:item})}>
                <View style={{
                    width: screenWidth,
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 15,
                    borderBottomColor: '#bdbdbd',
                    borderBottomWidth: 0.5
                }}>
                    <Image source={{uri: item.ImgPath}}
                           style={{
                               width: 80,
                               height: 80,
                               borderRadius: 3,
                               overflow: 'hidden',
                               shadowOffset: {width: 0, height: 2},
                               shadowOpacity: 0.3
                           }}/>
                    <View style={{flex: 1, paddingLeft: 15}}>
                        <Text style={{fontSize: 16, color: '#616161'}}>{item.EventTitle}</Text>
                        <Text style={{fontSize: 14, color: '#9e9e9e', lineHeight: 20, marginTop: 10}}>{item.EventDesc}</Text>
                    </View>
                </View>
                </TouchableOpacity>
                // <ItemData data={item}/>
            }
                keyExtractor={item => item.id}
            />
        :
        
        <FlatList
        contentContainerStyle={{paddingVertical: 5}}
        data={this.state.EventData}
        renderItem={({item}) =>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("EventDesMenu",{item:item})}>
               
        <View style={{
            width: screenWidth,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            borderBottomColor: '#bdbdbd',
            borderBottomWidth: 0.5
        }}>
            <Image source={{uri: item.ImgPath}}
                   style={{
                       width: 80,
                       height: 80,
                       borderRadius: 3,
                       overflow: 'hidden',
                       shadowOffset: {width: 0, height: 2},
                       shadowOpacity: 0.3
                   }}/>
            <View style={{flex: 1, paddingLeft: 15}}>
                <Text style={{fontSize: 16, color: '#616161'}}>{item.EventTitle}</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', lineHeight: 20, marginTop: 10}}>{item.EventDesc}</Text>
            </View>
        </View>
        </TouchableOpacity>
        // <ItemData data={item}/>
    }
        keyExtractor={item => item.id}
    />
    }
            {/* <MaterialSnackbar ref={this.state.snackbarRef}/> */}
        </View>
    );
                }
}


export default ProfileStyle25;