import React, { Component } from 'react';
import {
    Text,
    View ,
    Image,
    FlatList,
    ActivityIndicator
} from 'react-native'
// import styles from "../style/Backgroundstyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from "date-fns";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import FloatingButton from '../../components/FloatingButton';
import moment from 'moment';

class MyBookig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Restaurantsapi:[],
            isLoading:true,
             DATA :[
                {id: '1', image: 'gallery_9_img_1.jpg', title: 'Urban Skyscrapers'},
                {id: '2', image: 'gallery_9_img_2.jpg', title: 'Citywalks'},
                {id: '3', image: 'gallery_9_img_3.jpg', title: 'Nature'},
                {id: '4', image: 'gallery_9_img_4.jpg', title: 'Mountain'},
            ]
        }
    }
    componentDidMount(){
    //    const dateDMY = moment("1994-07-01 14:35").format('MMM Do, yyyy H:mmA')
    //    const date= moment("14:35").format('HH:mm: A')
    //    console.log(date)
    //    console.log(dateDMY)
        // var date = new Date("2016-01-04T10:34:23");
        // var formattedDate = format(new Date("2016-01-04T10:34:23"), "MMMM Do, yyyy H:mma");
        // console.log(formattedDate);
        // this.getParsedDate("2022-01-19 03:42")
        AsyncStorage.getItem("@User_key")
        .then(req => JSON.parse(req))
          .then(user => {
           AsyncStorage.getItem("LanguageId_key")
        // .then(req => JSON.parse(req))
          .then(langageId => {
            console.log(langageId)
            //  this.setState({Token:value});

            var myHeaders = new Headers();
            myHeaders.append("Cookie", "ci_session=v6bquo9orv2tqi52864d2sfhuphd6cne");
            
            var formdata = new FormData();
            formdata.append("custid", user.id);            
            formdata.append("token", user.token);
            formdata.append("languageid",langageId)
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: formdata,
              redirect: 'follow'
            };
            fetch("http://managecontour.crazymonkey.tech/index.php/api/Activitybooking/get_all_booking", requestOptions)
              .then(response => response.json())
              .then(result => {
                if(result.status == 200){
                    // console.log(result)
                    this.setState({Restaurantsapi:result.data});
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
                    title='My Booking'
                    isHome={true}
                    isGallery={false}
                    isenableMore={false}
                    navPress={navPress}
                    bgColor='#ff7900'
                />
                {this.state.isLoading? 
                <View style= {{flex:1, justifyContent:"center", alignItems: "center"}}>
                    <ActivityIndicator size="large" color="#ff7900" />
                </View>
                :
                this.state.Restaurantsapi.length == 0?
                <Text style={{textAlign: "center" , marginTop: 15}}>No Data Found</Text>:
           
                <FlatList
                    contentContainerStyle={{paddingVertical: 5}}
                    data={this.state.Restaurantsapi}
                    renderItem={({item}) =>
                        <View style={{
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            backgroundColor:"white",
                            margin: 5,
                            marginHorizontal:10,
                            borderRadius: 5,
                            flexDirection:'row'
                        }}>
                            <Image source = {{uri:item.HotelActivityImage}}
                             style={{height:100, width:100, borderRadius:5, marginRight:10, alignSelf:"center"}}/>
                            <View style={{flex:1}}>
                                <Text style={{fontSize:16, fontWeight: "bold", color:"#333333"}}>{item.HotelActivityTitle}</Text>
                                <Text>Person: {item.qty}</Text>
                                {/* <Text>Date: {item.createdate.substring(0, 10)}</Text> */}
                                <Text>{moment(item.date).format("MMM Do, yyyy H:mmA")}</Text>
                                <Text style={{color:"#ff7900"}}>{item.price} X {item.qty} = {item.totalprice}$ </Text>
                                <Text style={{alignSelf: "flex-end",padding:5,fontSize:10,borderRadius:3, backgroundColor:item.status=="Pending"?"yellow":"green",color:item.status=="Pending"?"black":"white"}}>{item.status}</Text>
                            </View>       
                        </View>
                    }
                    keyExtractor={item => item.id}
                />
            }
            </View>
        );
    }
}
export default MyBookig;            