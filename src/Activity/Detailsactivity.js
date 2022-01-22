import React, { Component, createRef } from 'react';
import {
    Text,
    TouchableOpacity,
    View ,
    ScrollView,
    Image,
    Button,
    ActivityIndicator
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialButton from "../../components/MaterialButton";
import FloatingButton from "../../components/FloatingButton";
import moment from "moment";
import AsyncStorage  from '@react-native-async-storage/async-storage';
import MaterialSnackbar from "../../components/MaterialSnackbar";
const delay = ms => new Promise(res => setTimeout(res, ms));

class ActivityApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
           person:1,
            Data : [],
            date:new Date(),
            mode:"date",
            show:false,
            sdate:"",
            time:"",
            user:{},
            langageId:"",
            isLoading:false
        }
        this.snackbar = React.createRef(null);
    }
    onChange = (event, selectedDate) => {
        const currentDate = selectedDate || this.state.date;
        // setShow(Platform.OS === 'ios');
        this.setState({show:Platform.OS === 'ios'})
        // setDate(currentDate);
        if(this.state.mode == "date"){
        this.setState({sdate:moment(currentDate).format("YYYY-MM-DD")})
        }else{
            this.setState({time:moment(currentDate).format("HH:mm")})
        }
        console.log(this.state.date)
      };
       showMode = (currentMode) => {
        this.setState({show:true})
        this.setState({mode:currentMode})
        // setMode(currentMode);
      };
    
      showDatepicker = () => {
        this.showMode('date');
      };
    
      showTimepicker = () => {
        this.showMode('time');
      };
      Book=()=>{
          if(this.state.sdate == ""){
              alert("Please Select Date")
          }else if(this.state.time ==""){
              alert("Please Select Time")
          }else{
              this.setState({isLoading:true})
            this.Book_API()
          }
      }
      Book_API= ()=>{
          console.log(this.state.Data.HotelActivityHeaderId)
          console.log()
          const dt = this.state.sdate +" "+ this.state.time
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "ci_session=hgrkk34p9a7vsa2a319sncqcuj7gg3vo");
        
        var formdata = new FormData();
        formdata.append("token", this.state.user.token);
        formdata.append("custid", this.state.user.id);
        formdata.append("qty", this.state.person);
        formdata.append("hotelactivityid", this.state.Data.HotelActivityHeaderId);
        formdata.append("date", dt);
        formdata.append("languageid",this.state.langageId)
        // console.log(formdata)
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("http://managecontour.crazymonkey.tech/index.php/api/Activitybooking/book", requestOptions)
          .then(response => response.json())
          .then(result => {
            this.setState({isLoading:false})
            //   console.log(result)
              if(result.status == 200){
                  
                 this.snackbar.current.ShowSnackBarFunction('successfully saved')
                //  await delay(5000);
                setTimeout(()=> {
                 this.props.navigation.navigate("Menuside",{tag:3})
                }, 2000);
                //   this.props.navigation.navigate('Success')
              }
          }
          )
          .catch(error => 
            {
                this.setState({isLoading:false})
                console.log('error', error)})
        }
    componentDidMount(){
       
        AsyncStorage.getItem("@User_key")
        .then(req => JSON.parse(req))
          .then(user => {
              this.setState({user:user})
          })
           AsyncStorage.getItem("LanguageId_key")
        // .then(req => JSON.parse(req))
          .then(value1 => {
            console.log(value1)

             this.setState({langageId:value1});
          })
        const item= this.props.route.params.item
        this.setState({Data:item})
        console.log(item)
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <ScrollView>
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
                <Image source={{uri: this.state.Data.HotelActivityImage}}
                       style={{height: 190, width: '100%', resizeMode: 'stretch'}}/>
                <View style={{padding: 15, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, marginLeft: 10,}}>
                        <Text style={{fontSize: 14}}>
                            <Text style={{fontWeight: 'bold', color: '#616161',textAlign:"center"}}>{this.state.Data.HotelActivityTitle}</Text>
                        </Text>
                    </View>
                    {/* <TouchableOpacity>
                        <Text style={{fontSize: 14, color: '#2979ff'}}>Like</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={{width: '100%', height: 0.5, backgroundColor: '#e0e0e0'}}/>
                <Text style={{fontSize: 14, color: '#616161', padding: 15, lineHeight: 20}}>{this.state.Data.HotelActivityDesc}</Text>
                <View style={{width: '100%', height: 0.5, backgroundColor: '#e0e0e0'}}/>
                <View style = {{height:50, justifyContent:"center"}}>
                <Text style={{fontSize: 12, marginLeft: 5, padding: 15, color: '#616161'}}>
                           <Text style = {{fontWeight:"bold"}}>Price: </Text>  
                            {this.state.Data.Price} $</Text>
                </View>
                <View style={{width: '100%', height: 0.5, backgroundColor: '#e0e0e0'}}/>
                
                <View style={{flexDirection:'row', flex:1, alignItems: "center", marginHorizontal:15, marginBottom:10, marginTop: 20, justifyContent:"space-around"}}>
                    <View style={{flex:0.45}}>
                    <Text style={{width:50, fontWeight:'bold',color: '#616161'}}>Date:</Text>
                    <TouchableOpacity onPress={this.showDatepicker} style = {{height:35, borderWidth: 0.7,borderRadius:3,paddingLeft: 5,flex:1, flexDirection:'row',alignItems:"center", justifyContent:'space-between'}}>
                        <Text>{this.state.sdate}</Text>
                        <Image source={require('./../../assets/cldr.png')} style={{height:25, width: 25, marginRight: 5}}/>
                        {/* <Button  title="Show date picker!" /> */}

                    </TouchableOpacity>
                    
                </View>
                <View style={{flex:0.45}}>
                {/* <View style={{flexDirection:'row', flex:1, alignItems: "center", marginHorizontal:15}}> */}
                    <Text style={{width:50, fontWeight:'bold',color: '#616161'}}>Time:</Text>
                    <TouchableOpacity onPress={this.showTimepicker} style = {{height:35, borderWidth: 0.7,borderRadius:3,paddingLeft: 5,flex:1, flexDirection:'row',alignItems:"center", justifyContent:'space-between'}}>
                        <Text>{this.state.time}</Text>
                        <Image source={require('./../../assets/cldr.png')} style={{height:25, width: 25, marginRight: 5}}/>
                        {/* <Button  title="Show date picker!" /> */}

                    </TouchableOpacity>
                    {/* </View> */}
                </View>
                </View>
                {this.state.show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={this.state.date}
                    mode={this.state.mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.onChange}
                    format="YYYY-MM-DD"
                    minDate={new Date()}
                                    
                    // placeholder={moment(this.state.date).format("MMM-DD")}
                                    
                    />
                )}  
                 
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
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
                {/* <View style={{width: '100%', height: 0.5, backgroundColor: '#e0e0e0'}}/> */}
                  
                <View style={{
                    width: '100%',
                    // flexDirection: 'row',
                    marginBottom: 15,
                    padding: 15,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    
                   
                     <MaterialButton title='Book' style={{width: 73, borderRadius: 3, backgroundColor: '#ff7900'}}
                            // buttonPress={() => Alert.alert("Book Pressed")}
                            buttonPress={() => this.Book()}
                            // onPress={this.Book}
                    /> 
                   </View>
                
            </View>
        </View>
        <MaterialSnackbar ref={this.snackbar}/>
    
              </ScrollView>
{this.state.isLoading?
    <ActivityIndicator size="large" color="#ff7900" style={{position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    alignItems: 'center',
                    justifyContent: 'center'}} />
:null}
            {/* <MaterialSnackbar ref={snackbarRef}/> */}
        </View>
    );
}
}
export default ActivityApp; 