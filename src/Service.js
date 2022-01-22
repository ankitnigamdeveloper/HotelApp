import React, { Component } from "react";
import { 
  Text,
  View ,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,

} from "react-native";
import Activity from './activity'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/Servicestyle'

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Activity:true,
            Data:[
                {id:"1",HotelActivityTitle:"ATX Cocina", HotelActivityDesc :"mexican"}],
        }
    }
    
    render(){
        return (
            <SafeAreaView>
                <View style={styles.mainview}>
                    
                {/* <FlatList
                data={this.state.Data}
                // horizontal
                style={{marginBottom:145, marginTop: 5}}
                renderItem ={ ({ item }) => 
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity
                        // onPress={()=>this.props.navigation.navigate('Activity2')}
                        >
                        <Image
                            style={styles.images}
                            imageStyle={{borderRadius:7}}
                            source={{uri:(item.HotelActivityImage )} }
                            resizeMode="cover"
                        />
                        <View style={{justifyContent:"flex-end",marginHorizontal:12}}>
                            <Text
                                style={styles.nametxt}>
                                {item.HotelActivityTitle}
                            </Text>
                            <View style={{height:30}}>
                                <Text style ={styles.desctxt}>{item.HotelActivityDesc}</Text>
                            </View> 
                        </View>
                        
                    </TouchableOpacity>
                </View>
            }/> */}
            <Text>govindnjnccjb</Text>
                </View>
                 </SafeAreaView>
        );
    }
}
    