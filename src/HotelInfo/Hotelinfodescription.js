import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View ,
    ScrollView,
    Image,
    commentData,
    Alert,
    Button
    
} from 'react-native'
import {PageContext} from "../../App";
// import MaterialSnackbar from "../../components/MaterialSnackbar";
// import {storageImageUrl} from "../../tools/Helpers";
import moment from "moment";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import DateTimePicker from '@react-native-community/datetimepicker';
// import MaterialInput from "../../components/MaterialInput";
import MaterialButton from "../../components/MaterialButton";
// import styles from "../style/Indexstyle";





class ActivityApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Hotel:{},
            name:"",
            desc:"",
            date:new Date(),
            mode:"date",
            show:false
        }
    }
     ActivityStyle20() {
        const pageContext = useContext(PageContext);
        const snackbarRef = useRef(null);
    
        let commentData = [];
        DATA.map((dt) => {
            commentData.push(<ItemActivity key={dt.id} data={dt}/>)
        });
    }

    componentDidMount(){
            const item= this.props.route.params.item
            this.setState({Hotel:item})
            console.log(item)
          }
          Book = () =>{
              Alert.alert("Book")
          }
           onChange = (event, selectedDate) => {
            const currentDate = selectedDate || date;
            // setShow(Platform.OS === 'ios');
            this.setState({show:Platform.OS === 'ios'})
            // setDate(currentDate);
            this.setState({date:moment(currentDate).format("YYYY-MM-DD")})
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
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
            {/* <HeaderThreeButton
                title='Hotel description'
                isHome={true}
                isGallery={false}
                isenableMore={false}
                // navPress={() => pageContext.pageDispatch({page: 'pop'})}
                // searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                // morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#f44336'
            /> */}
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
                <View style={{padding: 15, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, marginLeft: 10,}}>
                        <Text style={{fontSize: 14}}>
                            {/* <Text style={{fontWeight: 'bold', color: '#616161',textAlign:"center"}}>Hotel Title</Text> */}
                            <Text style={{fontWeight: 'bold', color: '#616161',textAlign:"center"}}>{this.state.Hotel.InfoTitle}</Text>
                        </Text>
                    </View>
                </View>
                <View style={{width: '100%', height: 0.5, backgroundColor: '#e0e0e0'}}/>
                <Text style={{fontSize: 14, color: '#616161', padding: 15, lineHeight: 20}}>{this.state.Hotel.InfoDesc}</Text>
                <View style={{width: '100%', height: 0.5, backgroundColor: '#e0e0e0'}}/>
        <View>
        {/* <Button onPress={this.showDatepicker} title="Show date picker!" /> */}

      </View>
      <View>
        {/* <Button onPress={this.showTimepicker} title="Show time picker!" /> */}
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
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginBottom: 15,
                    padding: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {/* <View style= {{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/icon/ic_love_red.png')}
                               style={{width: 10, height: 10, tintColor: '#757575', resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>Price:100$</Text>
                    </View> */}
                     <MaterialButton title='Book' style={{width: 73, borderRadius: 3, backgroundColor: '#ff7900'}}
                            // buttonPress={() => Alert.alert("Book Pressed")}
                            buttonPress={() => this.Book()}
                            // onPress={this.Book1}
                    /> 
                    {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/icon/ic_menu4_message.png')}
                               style={{
                                   width: 14,
                                   height: 10,
                                   marginLeft: 25,
                                   tintColor: '#757575',
                                   resizeMode: 'contain'
                               }}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>19</Text>
                    </View> */}
                </View>
                 

            </View>
        </View>
                <View style={{
                    margin: 10,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    shadowRadius: 3,
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3
                }}>
                    {commentData}
                    {/* <this.ChatContainer onpress={()=>this.name()}/> */}
                </View>
            </ScrollView>
            {/* <MaterialSnackbar ref={snackbarRef}/> */}
        </View>
    );
}



 

 
        }
export default ActivityApp; 