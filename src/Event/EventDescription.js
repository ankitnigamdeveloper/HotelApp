import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View ,
    ScrollView,
    Image,
    commentData,
    Alert,
    
} from 'react-native'
import HeaderThreeButton from "../../components/HeaderThreeButton";
import FloatingButton from "../../components/FloatingButton";
// import MaterialInput from "../../components/MaterialInput";
import MaterialButton from "../../components/MaterialButton";
// import styles from "../style/Indexstyle";





class ActivityApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data:[],
            name:"",
            desc:"",
            person:1
        }
    }
    
     
        componentDidMount(){
            const item= this.props.route.params.item
            this.setState({Data:item})
            // console.log(item)
           
          }
         Book=()=>{
             alert("book")
         }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <ScrollView>
                {/* <this.MainContent/> */}
                <View style={{flexDirection: 'row'}}>
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                 <Image source={{uri: this.state.Data.ImgPath}}
                       style={{height: 190, width: '100%', resizeMode: 'stretch'}}/>
                <View style={{padding: 15, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, marginLeft: 10,}}>
                        <Text style={{fontSize: 14}}>
                            {/* <Text style={{fontWeight: 'bold', color: '#616161',textAlign:"center"}}>Hotel Title</Text> */}
                            <Text style={{fontWeight: 'bold', color: '#616161',textAlign:"center"}}>{this.state.Data.EventTitle}</Text>
                        </Text>
                    </View>
                </View>
                <View style={{width: '100%', height: 0.5, backgroundColor: '#e0e0e0'}}/>
                <Text style={{fontSize: 14, color: '#616161', padding: 15, lineHeight: 20}}>{this.state.Data.EventDesc}</Text>
                <View style={{width: '100%', height: 0.5, backgroundColor: '#e0e0e0'}}/>
                <Text style={{fontSize: 14, color: '#616161', padding: 15, lineHeight: 20}}>
                    <Text style={{fontWeight:"bold"}}>Event Venue: </Text>
                    {this.state.Data.EventVanue}</Text>
                {/* <View style={{width: '100%', height: 0.5, backgroundColor: '#e0e0e0'}}/> */}
                <Text style={{fontSize: 14, color: '#616161', padding: 15, lineHeight: 20}}>
                <Text style={{fontWeight:"bold"}}>Time: </Text>
                 {this.state.Data.EventTitle}</Text>
                {/* <View style={{width: '100%', height: 0.5, backgroundColor: '#e0e0e0'}}/> */}
                <Text style={{fontSize: 14, color: '#616161', padding: 15, lineHeight: 20}}>
                <Text style={{fontWeight:"bold"}}>Date: </Text>
                    {this.state.Data.EventTitle}</Text>
                <View style={{width: '100%', height: 0.5, backgroundColor: '#e0e0e0'}}/>
               
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <Text style={{fontSize: 14, color: '#616161', padding: 15, lineHeight: 20, fontWeight:"bold"}}>Number of Person</Text>
                        <FloatingButton size={34} style={{backgroundColor: '#ff7900', position: 'relative'}}
                                        image={require('../../assets/icon/ic_minus.png')}
                                        imageStyle={{tintColor: 'white', width: 20, height: 20}}
                                        onPress={() => this.state.person>1?this.setState({person:this.state.person - 1}):console.log("0")}/>
                        <Text style={{width: 50, textAlign: 'center', fontSize: 14, color: '#bdbdbd'}}>{this.state.person}</Text>
                        <FloatingButton size={34} style={{backgroundColor: '#ff7900', position: 'relative'}}
                                        image={require('../../assets/icon/ic_plus.png')}
                                        imageStyle={{tintColor: 'white', width: 20, height: 20}}
                                        onPress={() =>  this.setState({person:this.state.person + 1})}/>

                    </View>
                     
                  
                  <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginBottom: 15,
                    padding: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                  <MaterialButton title='Book' style={{width: 73, borderRadius: 3, backgroundColor: '#ff7900'}}
                            // buttonPress={() => Alert.alert("Book Pressed")}
                            buttonPress={() => this.Book()}
                            // onPress={this.Book1}
                    /> 
                    </View>

            </View>
        </View>
             </ScrollView>
            {/* <MaterialSnackbar ref={snackbarRef}/> */}
        </View>
    );
}
}
export default ActivityApp; 