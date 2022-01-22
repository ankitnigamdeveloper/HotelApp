import React, { Component } from 'react';
import { Text, View, StyleSheet, Button,Image,Dimensions,Alert,navigation } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from "../style/Barcodestyle";
import { SafeAreaView } from 'react-native-safe-area-context';


const screenheight = Dimensions.get('window').height -140  ;
const screenWidth = Dimensions.get('window').width;




class BarcodeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
          scanned: false,
          hasPermission:'granted'
        }
    }
    componentWillUnmount(){
      this.setState({scanned:false})
    }
    async componentDidMount(){
      // const { status } = await BarCodeScanner.requestPermissionsAsync();
      //       this .setState({hasPermission :status === 'granted'})
    
    }
    handleBarCodeScanned = ({ type, data}) => {
          this.setState({scanned:true})
          this.props.navigation.navigate('Signup',{data:data})
          // setScanned(false)
          // alert(`Bar code with type ${type} and data ${data} has been scanned!`,);  
        };
 
      
    render() {
      
        return (
          <SafeAreaView>
                <View style={styles.mainview}>
                  {/* <View style={{height:100,width:"100%",alignItems:"center", position:"relative", top:0}}>
                    <Image source={require('../assets/Hotelname.jpg')} style={{height: 100, width: 200,resizeMode:"contain" }}></Image>
                </View> */}
                {this.state.hasPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <View style={styles.mainview}>
                <View style={{height:screenheight, width:screenWidth, backgroundColor:"red", }}>
                  
                <BarCodeScanner
                //  height ={screenheight} width={screenWidth} x={0} y={0}
                  onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
                  style={[StyleSheet.absoluteFillObject,{margin: -40, }]}
                  // style={}
                  // onPress={() => handleBarCodeScanned("Signup")}
                  
                >
                  <View style={{height:100,width:"100%",alignItems:"center",marginTop: 50}}>
                    <Image source={require('../assets/Hotelname.jpg')} style={{height: 100, width: 200,resizeMode:"contain" }}></Image>
                </View>
                  
                  <View style={{flex:1,width:"100%",justifyContent:"center",alignItems:"center",alignSelf:"center",opacity:0.1}}>
                  {/* <View style= {{height:"100%", backgroundColor:"red", alignItems: 'center', justifyContent:"center"}}> */}
                    <Image source={require('../assets/Barcode2.png')} style={{height:200, width:200, }}></Image>
                  </View>
                </BarCodeScanner>
                </View>
                
                {/* {this.state.scanned && <Button title={'Tap to Scan'} onPress={() =>
                  { this.setState({scanned:false})
                  
    }}/>} */}
                
                
                <View style={{position:"absolute",alignSelf:"flex-end",height:100,width:"100%",justifyContent:"center",alignItems:"center",
                      backgroundColor:"white",left:0,right:0,bottom:0,}}>
                <Text style={{fontSize:18,color:"black",textAlign:"center"}}>Please Scan the QR code to enjoy all the wonderful thing offered by the hotel</Text>
                </View>
                </View>
                }
            </View>
            </SafeAreaView>
            );
          }
        }
export default BarcodeApp;            

// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Button,Image,Dimensions,Alert,navigation } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';
// import styles from "../style/Barcodestyle";

// const screenheight = Dimensions.get('window').height-460;
// const screenWidth = Dimensions.get('window').width-120;

// export default function App({navigation}) {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);

//   useEffect(() => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const handleBarCodeScanned = ({ type, data}) => {
//     setScanned(true);
//     navigation.navigate('Signup',{data:data})
//     setScanned(false)
//     // alert(`Bar code with type ${type} and data ${data} has been scanned!`,);  
//   };

//   // if (hasPermission === null) {
//   //   return <Text>Requesting for camera permission</Text>;
//   // }
//   // if (hasPermission === false) {
//   //   return <Text>No access to camera</Text>;
//   // }

//   return (
//     <View style={styles.mainview}>
//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}
//         // onPress={() => handleBarCodeScanned("Signup")}
        
//       />
//       <View style={{height:100,width:"100%",alignItems:"center"}}>
//            <Image source={require('../assets/Hotelname.jpg')} style={{height: 100, width: 200,resizeMode:"stretch" }}></Image>
//       </View>
//       {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)}/>} */}
      
//       <View style={{flex:1,width:"100%",justifyContent:"center",alignItems:"center",alignSelf:"center",opacity:0.1,marginTop:-130,}}>
//            <Image source={require('../assets/Barcode2.png')} style={{height:200, width:200, }}></Image>
//       </View>
//       <View style={{position:"absolute",alignSelf:"flex-end",height:100,width:"100%",justifyContent:"center",alignItems:"center",
//             backgroundColor:"white",left:0,right:0,bottom:0,}}>
//       <Text style={{fontSize:18,color:"black",textAlign:"center"}}>Please Scan the QR code to enjoy all the wonderful thing offered by the hotel</Text>
//       </View>
//    </View>
//   );
// }
