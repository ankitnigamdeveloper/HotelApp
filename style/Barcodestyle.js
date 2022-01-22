import {StyleSheet,StatusBar,Dimensions} from "react-native"

export default  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainview:{
      // flex:1, 
      // marginTop:StatusBar.currentHeight,
      backgroundColor:"white",
      height:Dimensions.get("window").height ,
      width:Dimensions.get("window").width,
      // alignItems: 'center',
    //   justifyContent: 'center',
        // paddingTop:60,
        // marginTop:60
      },
    })